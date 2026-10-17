"use client";

import { useEffect, useRef, useState } from "react";
import { publicPath } from "@/lib/data";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wasPlaying = useRef(true);
  const [soundOn, setSoundOn] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const hero = document.getElementById("hero");
    if (!video || !hero) return;
    video.muted = true;
    video.loop = true;
    const start = () => {
      void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    };
    if (video.readyState >= 2) start();
    else video.addEventListener("loadeddata", start, { once: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.intersectionRatio < 0.35) {
          wasPlaying.current = !video.paused;
          video.pause();
        } else if (wasPlaying.current) {
          void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        }
      },
      { threshold: [0, 0.35, 0.6] },
    );
    observer.observe(hero);
    return () => {
      video.removeEventListener("loadeddata", start);
      observer.disconnect();
    };
  }, []);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (soundOn) {
      video.muted = true;
      video.loop = true;
      setSoundOn(false);
      return;
    }
    video.currentTime = 0;
    video.loop = false;
    video.muted = false;
    try {
      await video.play();
      setSoundOn(true);
      setPlaying(true);
    } catch {
      video.muted = true;
      video.loop = true;
      setSoundOn(false);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;
    setSoundOn(false);
    video.muted = true;
    video.loop = true;
    video.currentTime = 0;
    void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try {
        await video.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      video.pause();
      setPlaying(false);
      wasPlaying.current = false;
    }
  };

  return (
    <div className="hero-video-shell" data-reveal>
      <div className="hero-video-frame">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={publicPath("/portrait/portrait-bust.webp")}
          aria-label="Gopal Luhar speaking about lead generation and data research"
          onEnded={handleEnded}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src={publicPath("/hero/hero.mp4")} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
        <div className="video-controls" aria-label="Introduction video controls">
          <button
            type="button"
            className="video-control"
            onClick={togglePlayback}
            aria-label={playing ? "Pause introduction video" : "Play introduction video"}
            title={playing ? "Pause video" : "Play video"}
          >
            {playing ? "❚❚" : "▶"}
          </button>
          <button
            type="button"
            className={soundOn ? "video-control sound-active" : "video-control"}
            onClick={toggleSound}
            aria-label={soundOn ? "Mute introduction audio" : "Play introduction with sound"}
            title={soundOn ? "Mute audio" : "Play with sound"}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9v6h4l5 4V5L8 9H4Z" />
              {soundOn ? <path d="M16 9a5 5 0 0 1 0 6m2-9a9 9 0 0 1 0 12" /> : <path d="m17 9 5 6m0-6-5 6" />}
            </svg>
          </button>
          <span className="video-control-caption">{soundOn ? "Audio on" : "Sound off"}</span>
        </div>
      </div>
      <p className="video-caption">A short introduction · 00:10</p>
    </div>
  );
}
