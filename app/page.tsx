import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div>
      <Marquee>
        <div class="m-2">
          <img
            src="https://www.themoviedb.org/t/p/original/7Z7WVzJsSReG8B0CaPk0bvWD7tK.jpg"
            width="400px"
            height="225px"
          />
        </div>
        <div class="m-2">
          <img
            src="https://www.themoviedb.org/t/p/original/5FROLD8zpWFs9ja7aYho1uOMJHg.jpg"
            width="150px"
            height="225px"
          />
        </div>
        <div class="m-2">
          <img
            src="https://www.themoviedb.org/t/p/original/pngbqfh7YZUgJs4Fn5368Sw29E2.jpg"
            width="150px"
            height="225px"
          />
        </div>
        <div class="m-2">
          <img
            src="https://www.themoviedb.org/t/p/original/tDFvXn4tane9lUvFAFAUkMylwSr.jpg"
            width="400px"
            height="225px"
          />
        </div>
        <div class="m-2">
          <img
            src="https://www.themoviedb.org/t/p/original/gJCRERaZs0NvHktBsfDllc09pE1.jpg"
            width="150px"
            height="225px"
          />
        </div>
        <div class="m-2">
          <img
            src="https://www.themoviedb.org/t/p/original/1vZAjTt2RW5mhOsO6K0KnLve612.jpg"
            width="150px"
            height="225px"
          />
        </div>
      </Marquee>
    </div>
  );
}
