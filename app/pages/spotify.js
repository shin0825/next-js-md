import Link from 'next/link';
import fetch from 'node-fetch';

function Spotify(props) {
  return (
    <div>
      <p>Next.js has {props.stars} ⭐️</p>
      <Link href="/get-static-props">
        <a>Go to getStaticProps</a>
      </Link>
    </div>
  )
}

export async function getServerSideProps() {
  const client_id = "d2503cedd2b746de8bce808a507b4666";
  const client_secret = "593d7124ad1940f6b6db35f2b267aaf7";
  const authorization_code = "AQCU40KkwXaCUWeZ4XsO8a67dr6viEp0eZeyuyYEGSpohUy6mZdQJ7_eH8Zu9IlB6hc7Htzx70Af9ngi8lB8KOuwhUsz-LDGmlY2sZ4toMWMmK8iai_16U_fVutu_tkg5emMtbZzjI8aBBli5fO5sDleLjqkrN-fhX2P0O49-6elXrR5BCgr0htcKcTVFSD6jXFX6uGxO9-QCjWfzak2UQ";
  const basic_authorization = Buffer.from(client_id+":"+client_secret).toString('base64'); // 変更不要
  const access_token = await getFirstAccessTokenToSpotify(authorization_code, basic_authorization);
    console.log(access_token);
  // 聞いている曲を Slack の Status へ反映
  let now_playing = await getNowPlaying(access_token, basic_authorization);
  if (now_playing == null) {
    now_playing = "";
  }
  return {
    props: {
      stars: now_playing,
    },
  }
}

async function getFirstAccessTokenToSpotify(authorization_code, basic_authorization) {
    const headers = { "Authorization": "Basic " + basic_authorization };
    const payload = {
        "grant_type": "authorization_code",
        "code": authorization_code,
        "redirect_uri": "http://localhost:13000/spotify"
    };
    const options = {
        "payload": payload,
        "headers": headers,
    };
    console.log(options);
    const response = await fetch("https://accounts.spotify.com/api/token", options);
    console.log(response);
    const parsedResponse = response.json();
    return {
        'access_token': parsedResponse.access_token,
        'refresh_token': parsedResponse.refresh_token
    };
}

async function refreshAccessTokenToSpotify(basic_authorization) {
    const scriptProperties = PropertiesService.getScriptProperties();
    const refresh_token = scriptProperties.getProperty('refresh_token');

    const headers = {
        "Authorization": "Basic " + basic_authorization,
        "Content-Type": "application/x-www-form-urlencoded"
    };
    const payload = {
        "grant_type": "refresh_token",
        "refresh_token": refresh_token
    };
    const options = {
        "payload": payload,
        "headers": headers,
    };
    const response = await fetch("https://accounts.spotify.com/api/token", options);

    const parsedResponse = response.json();
    scriptProperties.setProperty('access_token', parsedResponse.access_token);
    // refresh_token は毎回発行されるとは限らない
    if (parsedResponse.refresh_token) {
        scriptProperties.setProperty('refresh_token', parsedResponse.refresh_token);
    }
    return parsedResponse.access_token;
}

async function getNowPlaying(access_token, basic_authorization) {
    const options = {
        "headers": { "Authorization": "Bearer " + access_token },
        "muteHttpExceptions": true // 401エラーへの対応のため
    };
    const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", options);

    switch (response.status) {
        case 200: // Spotify の曲をセット
            const parsedResponse = response.json();
            const artist = parsedResponse.item.album.artists[0].name;
            const song = parsedResponse.item.album.name;
            return song+"/"+artist;
        case 204: // 何も聞いていない
            return null;
        case 401: // access_token が切れた
            const refreshed_access_token = await refreshAccessTokenToSpotify(basic_authorization);
            return await getNowPlaying(refreshed_access_token, basic_authorization);
    }
}

export default Spotify
