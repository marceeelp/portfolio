import React, { Component } from "react";
import "./canvas.css";

class CanvasBackground extends Component {
  componentDidMount() {
    const canvas = this.canvas;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const c = canvas.getContext("2d");

    const mouse = { x: undefined, y: undefined };
    const colors = ["#FF4858", "#1B7F79", "#00CCC0", "#72F2EB"];
    let circles = [];

    const randomIntFromRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    class Circle {
      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.radius = 6;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speed = {
          x: randomIntFromRange(-2, 2),
          y: randomIntFromRange(-2, 2),
        };
      }

      draw() {
        const path = new Path2D();
        path.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = this.color;
        c.stroke(path);
      }

      update() {
        this.draw();

        this.x += this.speed.x;
        this.y += this.speed.y;

        if (this.radius > 2) this.radius -= 0.08;
      }
    }

    if ("ontouchstart" in window || navigator.maxTouchPoints) {
      const touchStartHandler = (e) => {
        e.preventDefault();
        const touch = e.touches[0];

        mouse.x = touch.clientX;
        mouse.y = touch.clientY;

        for (let i = 0; i < 10; i++) {
          circles.push(new Circle());
        }
      };

      this.canvas.addEventListener("touchstart", touchStartHandler);
    } else {
      addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;

        circles.push(new Circle());
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);

      circles.forEach((circle, i) => {
        circle.update();

        circles.forEach((otherCircle, j) => {
          const dx = circle.x - otherCircle.x;
          const dy = circle.y - otherCircle.y;
          const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

          if (distance < 100) {
            const path = new Path2D();
            path.moveTo(circle.x, circle.y);
            path.lineTo(otherCircle.x, otherCircle.y);
            c.lineWidth = 0.2;
            c.strokeStyle = circle.color;
            c.stroke(path);
          }
        });

        if (circle.radius < 2) circles.splice(i, 1);
      });
    };

    animate();
  }

  render() {
    return <canvas ref={(canvas) => (this.canvas = canvas)}></canvas>;
  }
}

export default CanvasBackground;
