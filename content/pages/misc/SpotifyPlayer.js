/* eslint react/no-unknown-property: 0 */
/* eslint react/prefer-stateless-function: 0 */

/**
 * Spotify player iframe widget
 *
 * @author Alexander Wallin <office@alexanderwallin.com>
 * @see https://developer.spotify.com/technologies/widgets/spotify-play-button/
 */

import React from "react";

// Size presets, defined by Spotify
const sizePresets = {
  large: {
    width: 300,
    height: 380,
  },
  small: {
    width: 250,
    height: 330,
  },
  compact: {
    width: 300,
    height: 80,
  },
};

function SpotifyPlayer({ uri, view, theme, size }) {
  return (
    <iframe
      title="Spotify"
      className="SpotifyPlayer"
      src={`https://embed.spotify.com/?uri=${uri}&view=${view}&theme=${theme}`}
      width={sizePresets[size].width}
      height={sizePresets[size].height}
      style={{ padding: "5px" }}
      frameBorder="0"
      allowtransparency="true"
    />
  );
}

export default SpotifyPlayer;
