"use client";

import Image from "next/image";
import ModalVideo from "../common/ModalVideo";
import { useMemo, useState } from "react";

function extractYoutubeId(url) {
  if (!url) return "";
  const regExp =
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/;
  const match = url.match(regExp);
  return match?.[1] || "";
}

export default function VideoReview({ property }) {
  const [isOpen, setIsOpen] = useState(false);
  const videoUrl = property?.video_url || "";
  const videoId = useMemo(() => extractYoutubeId(videoUrl), [videoUrl]);
  const previewImage =
    property?.imageSrc ||
    property?.images?.[0]?.image_url ||
    "/images/section/property-detail.jpg";

  if (!videoUrl) return null;

  if (videoId) {
    return (
      <>
        <div className="wg-title text-11 fw-6 text-color-heading">Video</div>
        <div className="widget-video style-1">
          <Image
            className="lazyload"
            alt={property?.title || "video-preview"}
            src={previewImage}
            width={792}
            height={446}
          />
          <a onClick={() => setIsOpen(true)} className="popup-youtube">
            <i className="icon-play" />
          </a>
        </div>
        <ModalVideo setIsOpen={setIsOpen} isOpen={isOpen} videoId={videoId} />
      </>
    );
  }

  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">Video</div>
      <div className="widget-video style-1">
        <video controls width="100%" style={{ borderRadius: "16px" }}>
          <source src={videoUrl} />
        </video>
      </div>
    </>
  );
}