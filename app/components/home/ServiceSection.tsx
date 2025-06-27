'use client'

import React from 'react'
import * as Container from '@radix-ui/react-slot';
import { Button } from '@radix-ui/themes';
import "./Homepagestyle.css";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Link from 'next/link';
import { BsArrowReturnRight } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(Draggable, InertiaPlugin);
}

const ServiceSection = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const loopRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const serviceCards = gsap.utils.toArray(".service-card") as HTMLElement[];

    // Calculate the width of 4 cards plus gaps
    const cardWidth = serviceCards[0]?.offsetWidth || 300;
    const cardGap = 20;
    const slideWidth = (cardWidth * 4) + (cardGap * 3);

    // Initialize horizontal loop
    const loop = horizontalLoop(serviceCards, {
      paused: false,
      paddingRight: cardGap,
      draggable: true,
      speed: 1,
      center: false,
      snap: 1 / (serviceCards.length / 4), // Snap to groups of 4
      onChange: (item: HTMLElement, index: number) => {
        // Optional: handle change event
      }
    });

    loopRef.current = loop;

    // Auto-play interval
    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        loopRef.current?.next({ duration: 5, ease: "power1.inOut" });
      }, 5000);
    };

    startAutoPlay();

    const wrapper = wrapperRef.current;

    const pauseOnHover = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const resumeOnLeave = () => {
      if (!intervalRef.current) {
        startAutoPlay();
      }
    };

    if (wrapper) {
      wrapper.addEventListener('mouseenter', pauseOnHover);
      wrapper.addEventListener('mouseleave', resumeOnLeave);
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
      loop.kill();
      if (wrapper) {
        wrapper.removeEventListener('mouseenter', pauseOnHover);
        wrapper.removeEventListener('mouseleave', resumeOnLeave);
      }
    };
  }, []);

  // Navigation handlers
  const handleNext = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    loopRef.current?.next({ duration: 0.6, ease: "power1.inOut" });
    // Restart autoplay after manual navigation
    setTimeout(() => {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          loopRef.current?.next({ duration: 0.8, ease: "power1.inOut" });
        }, 5000);
      }
    }, 5000);
  };

  const handlePrev = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    loopRef.current?.previous({ duration: 0.6, ease: "power1.inOut" });
    // Restart autoplay after manual navigation
    setTimeout(() => {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          loopRef.current?.next({ duration: 0.8, ease: "power1.inOut" });
        }, 5000);
      }
    }, 5000);
  };

  // Horizontal loop function (same as before)
  function horizontalLoop(
    items: HTMLElement[],
    config: {
      paused?: boolean;
      paddingRight?: number;
      draggable?: boolean;
      speed?: number;
      center?: boolean | string | HTMLElement;
      snap?: boolean | number | ((value: number) => number);
      repeat?: number;
      reversed?: boolean;
      onChange?: (item: HTMLElement, index: number) => void;
    } = {}
  ): gsap.core.Timeline {
    items = gsap.utils.toArray(items);
    config = config || {};
    let onChange = config.onChange,
      lastIndex = 0,
      tl = gsap.timeline({
        repeat: config.repeat,
        onUpdate: onChange && function () {
          let i = tl.closestIndex();
          if (lastIndex !== i) {
            lastIndex = i;
            onChange(items[i], i);
          }
        },
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => {
          tl.totalTime(tl.rawTime() + tl.duration() * 100);
        }
      }),
      length = items.length,
      startX = items[0]?.offsetLeft || 0,
      times: number[] = [],
      widths: number[] = [],
      spaceBefore: number[] = [],
      xPercents: number[] = [],
      curIndex = 0,
      indexIsDirty = false,
      center = config.center,
      pixelsPerSecond = (config.speed || 1) * 100,
        snap =
          config.snap === false
            ? (v: number) => v
            : gsap.utils.snap(
                typeof config.snap === "number" || typeof config.snap === "function"
                  ? config.snap
                  : 1
              ),
      timeOffset = 0,
      container = center === true ? items[0].parentNode as HTMLElement : gsap.utils.toArray(center)[0] as HTMLElement || items[0].parentNode as HTMLElement,
      totalWidth: number,
      getTotalWidth = () => items[length - 1].offsetLeft + (xPercents[length - 1] / 100) * widths[length - 1] - startX + spaceBefore[0] + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0),
      populateWidths = () => {
        let b1 = container.getBoundingClientRect(),
          b2;
        items.forEach((el, i) => {
          widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
          xPercents[i] = snap((parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 + gsap.getProperty(el, "xPercent")));
          b2 = el.getBoundingClientRect();
          spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
          b1 = b2;
        });
        gsap.set(items, {
          xPercent: (i) => xPercents[i]
        });
        totalWidth = getTotalWidth();
      },
      timeWrap,
      populateOffsets = () => {
        timeOffset = center ? (tl.duration() * (container.offsetWidth / 2)) / totalWidth : 0;
        center && times.forEach((t, i) => {
          times[i] = timeWrap(tl.labels["label" + i] + (tl.duration() * widths[i]) / 2 / totalWidth - timeOffset);
        });
      },
      getClosest = (values, value, wrap) => {
        let i = values.length,
          closest = 1e10,
          index = 0,
          d;
        while (i--) {
          d = Math.abs(values[i] - value);
          if (d > wrap / 2) {
            d = wrap - d;
          }
          if (d < closest) {
            closest = d;
            index = i;
          }
        }
        return index;
      },
      populateTimeline = () => {
        let i, item, curX, distanceToStart, distanceToLoop;
        tl.clear();
        for (i = 0; i < length; i++) {
          item = items[i];
          curX = (xPercents[i] / 100) * widths[i];
          distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
          distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
          tl.to(
            item,
            {
              xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
              duration: distanceToLoop / pixelsPerSecond
            },
            0
          )
            .fromTo(
              item,
              {
                xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100)
              },
              {
                xPercent: xPercents[i],
                duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                immediateRender: false
              },
              distanceToLoop / pixelsPerSecond
            )
            .add("label" + i, distanceToStart / pixelsPerSecond);
          times[i] = distanceToStart / pixelsPerSecond;
        }
        timeWrap = gsap.utils.wrap(0, tl.duration());
      },
      refresh = (deep) => {
        let progress = tl.progress();
        tl.progress(0, true);
        populateWidths();
        deep && populateTimeline();
        populateOffsets();
        deep && tl.draggable ? tl.time(times[curIndex], true) : tl.progress(progress, true);
      },
      proxy;

    gsap.set(items, { x: 0 });
    populateWidths();
    populateTimeline();
    populateOffsets();
    window.addEventListener("resize", () => refresh(true));

    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length);
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex && index !== curIndex) {
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      if (time < 0 || time > tl.duration()) {
        vars.modifiers = { time: timeWrap };
      }
      curIndex = newIndex;
      vars.overwrite = true;
      gsap.killTweensOf(proxy);
      return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
    }

    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.closestIndex = (setCurrent) => {
      let index = getClosest(times, tl.time(), tl.duration());
      if (setCurrent) {
        curIndex = index;
        indexIsDirty = false;
      }
      return index;
    };
    tl.current = () => (indexIsDirty ? tl.closestIndex(true) : curIndex);
    tl.next = (vars) => toIndex(tl.current() + 1, vars);
    tl.previous = (vars) => toIndex(tl.current() - 1, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true);

    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }

    if (config.draggable && typeof Draggable === "function") {
      proxy = document.createElement("div");
      let wrap = gsap.utils.wrap(0, 1),
        ratio,
        startProgress,
        draggable,
        dragSnap,
        lastSnap,
        initChangeX,
        align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
        syncIndex = () => tl.closestIndex(true);

      draggable = Draggable.create(proxy, {
        trigger: items[0].parentNode,
        type: "x",
        onPressInit() {
          let x = this.x;
          gsap.killTweensOf(tl);
          startProgress = tl.progress();
          refresh();
          ratio = 1 / totalWidth;
          initChangeX = startProgress / -ratio - x;
          gsap.set(proxy, { x: startProgress / -ratio });
        },
        onDrag: align,
        onThrowUpdate: align,
        overshootTolerance: 0,
        inertia: true,
        snap(value) {
          if (Math.abs(startProgress / -ratio - this.x) < 10) {
            return lastSnap + initChangeX;
          }
          let time = -(value * ratio) * tl.duration(),
            wrappedTime = timeWrap(time),
            snapTime = times[getClosest(times, wrappedTime, tl.duration())],
            dif = snapTime - wrappedTime;
          Math.abs(dif) > tl.duration() / 2 && (dif += dif < 0 ? tl.duration() : -tl.duration());
          lastSnap = (time + dif) / tl.duration() / -ratio;
          return lastSnap;
        },
        onRelease() {
          syncIndex();
          draggable.isThrowing && (indexIsDirty = true);
        },
        onThrowComplete: syncIndex
      })[0];
      tl.draggable = draggable;
    }

    tl.closestIndex(true);
    lastIndex = curIndex;
    onChange && onChange(items[curIndex], curIndex);
    return tl;
  }

  return (
    <section className='service-section'>
      <Container.Slot className="container mx-auto h-full px-5 md:px-12 lg:px-24">
        <div className="serice-container">
          <div className="service-header flex justify-between items-end">
            <div className="service-left-heading">
              <h1>Our Digital Services</h1>
              <p>Web, design, marketing, and branding solutions to elevate your business online.</p>
            </div>
            <div className="service-right-btn">
              <div className="service-arrow-btns flex gap-3">
                <Button className='prev' onClick={handlePrev}><IoIosArrowRoundBack /></Button>
                <Button className='next' onClick={handleNext}><IoIosArrowRoundForward /></Button>
              </div>
            </div>
          </div>

          <div className="service-card-wrapper" ref={wrapperRef}>
            <div className="service-card">
              <h1 className='service-card-heading'>Web <br />Development</h1>
              <ul className='service-card-keywords'>
                <li className='flex items-center gap-2'><span><BsArrowReturnRight /></span>Responsive Website Design</li>
                <li className='flex items-center gap-2'><span><BsArrowReturnRight /></span>Custom Web Development</li>
                <li className='flex items-center gap-2'><span><BsArrowReturnRight /></span>E-Commerce Solutions</li>
              </ul>
              <div className="font-inter flex items-center service-btn-link">
                <Link href="/service" className="group flex items-center gap-2 no-underline border-b transition-all duration-300 cursor-pointer relative">
                  Enquire Now
                  <span className="service-btn-arrow flex items-center rounded-full transition-transform duration-300 group-hover:rotate-45">
                    <GoArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>

            <div className="service-card">
              <h1 className='service-card-heading'>Digital<br />Marketing</h1>
              <ul className='service-card-keywords'>
                <li className='flex items-center gap-2'><span><BsArrowReturnRight /></span>SEO & SEM Strategies</li>
                <li className='flex items-center gap-2'><span><BsArrowReturnRight /></span>Social Media Campaigns</li>
                <li className='flex items-center gap-2'><span><BsArrowReturnRight /></span>Lead Generation</li>
              </ul>
              <div className="font-inter flex items-center service-btn-link">
                <Link href="/service" className="group flex items-center gap-2 no-underline border-b transition-all duration-300 cursor-pointer relative">
                  Enquire Now
                  <span className="service-btn-arrow flex items-center rounded-full transition-transform duration-300 group-hover:rotate-45">
                    <GoArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>

            <div className="service-card">
              <h1 className='service-card-heading'>UI/UX <br />Designing</h1>
              <ul className='service-card-keywords'>
                <li className='flex items-center gap-2'><span><BsArrowReturnRight /></span>User-Centered Design</li>
                <li className='flex items-center gap-2'><span><BsArrowReturnRight /></span>Wireframes & Prototypes</li>
                <li className='flex items-center gap-2'><span><BsArrowReturnRight /></span>App & Web UI Design</li>
              </ul>
              <div className="font-inter flex items-center service-btn-link">
                <Link href="/service" className="group flex items-center gap-2 no-underline border-b transition-all duration-300 cursor-pointer relative">
                  Enquire Now
                  <span className="service-btn-arrow flex items-center rounded-full transition-transform duration-300 group-hover:rotate-45">
                    <GoArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>

            <div className="service-card">
              <h1 className='service-card-heading'>Graphics <br />Designing</h1>
              <ul className='service-card-keywords'>
                <li className='flex items-center gap-2'><span><BsArrowReturnRight /></span>Logo & Branding Design</li>
                <li className='flex items-center gap-2'><span><BsArrowReturnRight /></span>Marketing Collaterals</li>
                <li className='flex items-center gap-2'><span><BsArrowReturnRight /></span>Social Media Creatives</li>
              </ul>
              <div className="font-inter flex items-center service-btn-link">
                <Link href="/service" className="group flex items-center gap-2 no-underline border-b transition-all duration-300 cursor-pointer relative">
                  Enquire Now
                  <span className="service-btn-arrow flex items-center rounded-full transition-transform duration-300 group-hover:rotate-45">
                    <GoArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>

            <div className="service-card">
              <h1 className='service-card-heading'>Content <br />Strategy</h1>
              <ul className='service-card-keywords'>
                <li className='flex items-center gap-2'><span><BsArrowReturnRight /></span>Content Planning</li>
                <li className='flex items-center gap-2'><span><BsArrowReturnRight /></span>Copywriting Services</li>
                <li className='flex items-center gap-2'><span><BsArrowReturnRight /></span>SEO Content Creation</li>
              </ul>
              <div className="font-inter flex items-center service-btn-link">
                <Link href="/service" className="group flex items-center gap-2 no-underline border-b transition-all duration-300 cursor-pointer relative">
                  Enquire Now
                  <span className="service-btn-arrow flex items-center rounded-full transition-transform duration-300 group-hover:rotate-45">
                    <GoArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>

            <div className="service-card">
              <h1 className='service-card-heading'>Brand <br />Consulting</h1>
              <ul className='service-card-keywords'>
                <li className='flex items-center gap-2'><span><BsArrowReturnRight /></span>Brand Positioning</li>
                <li className='flex items-center gap-2'><span><BsArrowReturnRight /></span>Visual Identity</li>
                <li className='flex items-center gap-2'><span><BsArrowReturnRight /></span>Brand Guidelines</li>
              </ul>
              <div className="font-inter flex items-center service-btn-link">
                <Link href="/service" className="group flex items-center gap-2 no-underline border-b transition-all duration-300 cursor-pointer relative">
                  Enquire Now
                  <span className="service-btn-arrow flex items-center rounded-full transition-transform duration-300 group-hover:rotate-45">
                    <GoArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container.Slot>
    </section>
  )
}

export default ServiceSection