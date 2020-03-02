var Audio = React.createClass({ displayName: "Audio",
  getInitialState: function () {
    return {
      player: false };

  },

  componentDidMount: function () {
    var $player = $('.player');

    /**
                                  * Have to add media event listeners here.
                                  *
                                */
    $player.on('play', e => {
      e.preventDefault();
      this.playLocation();
    });

    $player.on('pause', e => {
      e.preventDefault();
      this.pause();
    });

    $player.on('ended', e => {
      e.preventDefault();
      this.ended();
    });

    $(document).on('keydown', e => {
      // Move currentTime forward and backward via arrow keys and play/pause via spacebar.
      if (e.keyCode == 39) {
        this.state.player.currentTime += 1;
      } else if (e.keyCode == 37) {
        this.state.player.currentTime -= 1;
      } else if (e.keyCode == 32 && this.state.player.paused == true) {
        e.preventDefault();
        this.state.player.play();
      } else if (e.keyCode == 32 && this.state.player.paused == false) {
        e.preventDefault();
        this.state.player.pause();
      }
    });

    $player.on('wheel', e => {
      e.preventDefault();
      e.stopPropagation();
      if (e.originalEvent.wheelDelta > 0) {
        this.state.player.currentTime += 1;
      } else {
        this.state.player.currentTime -= 1;
      }
    });
  },

  componentWillUnmount: function () {
    var $player = $('#' + this.props.id);
    $player.off('play');
    $player.off('pause');
    $(document).off('keydown');
    $player.off('wheel');
  },

  getPlaybackTime: function (time) {
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor(time / 60);
    if (minutes > 59) {
      minutes = Math.floor(time / 60) - 60;
    }

    var seconds = Math.round(time - minutes * 60);
    if (seconds > 3599) {
      seconds = Math.round(time - minutes * 60) - 3600;
    }

    return time;
  },

  playLocation: function () {
    this.setState({ player: $('.player')[0] }, function () {
      var playbackTime = this.getPlaybackTime(this.state.player.currentTime);
      var playbackTime = localStorage.getItem('codepenReactPlayer');

      if (playbackTime !== null) {
        this.state.player.currentTime = playbackTime;
      }
      this.state.player.play();
    });
  },

  pause: function () {
    var playbackTime = this.getPlaybackTime(this.state.player.currentTime);

    localStorage.setItem('ReactPlayer', playbackTime);
  },

  ended: function () {
    // Set playback_time to 0.
    localStorage.setItem('ReactPlayer', playbackTime);
  },

  render: function () {
    return React.createElement("audio", { controls: true, className: "player", preload: "false" },
    React.createElement("source", { src: "http://www.nihilus.net/soundtracks/dancemonkey.mp3" }));

  } });



React.render(React.createElement(Audio, null), document.getElementById('audio_div'));
