"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FiPlay,
  FiSearch,
  FiArrowRight,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

type VideoItem = {
  id: string;
  title: string;
  category: string;
  duration: string;
  image: string;
  video: string;
};

type PhotoItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type MediaItem =
  | {
      type: "video";
      data: VideoItem;
    }
  | {
      type: "photo";
      data: PhotoItem;
    };

const videos: VideoItem[] = [
  {
    id: "shib-nath-de",
    title: "Message by Shib Nath De",
    category: "On the Importance of Yoga Therapy",
    duration: "12:34",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85",
    video: "/videos/shib-nath-de.mp4",
  },
  {
    id: "introduction-yoga-therapy",
    title: "Introduction to Yoga Therapy",
    category: "A Healthier Life through Yoga",
    duration: "06:21",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=85",
    video: "/videos/introduction-to-yoga-therapy.mp4",
  },
  {
    id: "rooma-de",
    title: "In Conversation with Rooma De",
    category: "On Tradition, Practice and the Future",
    duration: "10:15",
    image:
      "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=1000&q=85",
    video: "/videos/rooma-de.mp4",
  },
];

const photographs: PhotoItem[] = [
  {
    id: "bhagabati-charan-ghosh",
    title: "Sri Bhagabati Charan Ghosh",
    description: "A rare photograph",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "teachers-students",
    title: "Teachers and Students",
    description: "At Yoga Cure Institute",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "moments-institute",
    title: "Moments at the Institute",
    description: "Life in Practice",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "institute-then-now",
    title: "The Institute",
    description: "Then and Now",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "surroundings",
    title: "Our Surroundings",
    description: "A source of inspiration",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "bhagabati-charan-ghosh-2",
    title: "Sri Bhagabati Charan Ghosh",
    description: "A rare photograph",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "teachers-students-2",
    title: "Teachers and Students",
    description: "At Yoga Cure Institute",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "moments-institute-2",
    title: "Moments at the Institute",
    description: "Life in Practice",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "institute-then-now-2",
    title: "The Institute",
    description: "Then and Now",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "surroundings-2",
    title: "Our Surroundings",
    description: "A source of inspiration",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85",
  },
];

const allMedia: MediaItem[] = [
  ...videos.map((video) => ({
    type: "video" as const,
    data: video,
  })),
  ...photographs.map((photo) => ({
    type: "photo" as const,
    data: photo,
  })),
];

export default function MediaPage() {
  const [activeImage, setActiveImage] = useState<PhotoItem | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [search, setSearch] = useState("");

  const [viewerItems, setViewerItems] = useState<MediaItem[]>([]);
  const [viewerIndex, setViewerIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const query = search.trim().toLowerCase();

  const filteredPhotos = useMemo(() => {
    if (!query) {
      return photographs;
    }

    return photographs.filter((photo) => {
      return (
        photo.title.toLowerCase().includes(query) ||
        photo.description.toLowerCase().includes(query)
      );
    });
  }, [query]);

  const filteredVideos = useMemo(() => {
    if (!query) {
      return videos;
    }

    return videos.filter((video) => {
      return (
        video.title.toLowerCase().includes(query) ||
        video.category.toLowerCase().includes(query)
      );
    });
  }, [query]);

  const filteredMedia = useMemo(() => {
    return [
      ...filteredVideos.map((video) => ({
        type: "video" as const,
        data: video,
      })),
      ...filteredPhotos.map((photo) => ({
        type: "photo" as const,
        data: photo,
      })),
    ];
  }, [filteredVideos, filteredPhotos]);

  const openVideo = (video: VideoItem) => {
    const items: MediaItem[] =
      query.length > 0
        ? filteredMedia
        : videos.map((item) => ({
            type: "video" as const,
            data: item,
          }));

    const index = items.findIndex(
      (item) => item.type === "video" && item.data.id === video.id,
    );

    setViewerItems(items);
    setViewerIndex(index >= 0 ? index : 0);
    setActiveImage(null);
    setActiveVideo(video);
  };

  const openPhoto = (photo: PhotoItem) => {
    const items: MediaItem[] =
      query.length > 0
        ? filteredMedia
        : photographs.map((item) => ({
            type: "photo" as const,
            data: item,
          }));

    const index = items.findIndex(
      (item) => item.type === "photo" && item.data.id === photo.id,
    );

    setViewerItems(items);
    setViewerIndex(index >= 0 ? index : 0);
    setActiveVideo(null);
    setActiveImage(photo);
  };

  const closeViewer = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setActiveImage(null);
    setActiveVideo(null);
    setViewerItems([]);
    setViewerIndex(0);
  };

  const showPrevious = () => {
    if (viewerItems.length === 0) {
      return;
    }

    const nextIndex =
      viewerIndex === 0 ? viewerItems.length - 1 : viewerIndex - 1;

    const item = viewerItems[nextIndex];

    setViewerIndex(nextIndex);

    if (item.type === "video") {
      setActiveVideo(item.data);
      setActiveImage(null);
    } else {
      setActiveImage(item.data);
      setActiveVideo(null);
    }
  };

  const showNext = () => {
    if (viewerItems.length === 0) {
      return;
    }

    const nextIndex =
      viewerIndex === viewerItems.length - 1 ? 0 : viewerIndex + 1;

    const item = viewerItems[nextIndex];

    setViewerIndex(nextIndex);

    if (item.type === "video") {
      setActiveVideo(item.data);
      setActiveImage(null);
    } else {
      setActiveImage(item.data);
      setActiveVideo(null);
    }
  };

  useEffect(() => {
    const activeViewer = Boolean(activeImage || activeVideo);

    if (!activeViewer) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImage, activeVideo]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!activeImage && !activeVideo) {
        return;
      }

      if (event.key === "Escape") {
        closeViewer();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    if (!activeVideo) {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.currentTime = 0;

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Browser may block autoplay until user interacts.
      });
    }
  }, [activeVideo]);

  const hasSearchResults =
    filteredVideos.length > 0 || filteredPhotos.length > 0;

  return (
    <div className="min-h-screen bg-[#F3EBDD] text-[#292725]">
      {/* HERO */}
      <section className="relative min-h-[560px] overflow-hidden bg-[#161616] text-white sm:h-[360px] lg:h-[390px]">
        <Image
          src="/images/media/media-hero.png"
          alt="Historical photographs and film representing the heritage of Yoga Cure Institute"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

        <div className="relative mx-auto flex h-full w-[calc(100%-32px)] max-w-[1400px] items-center sm:w-[calc(100%-48px)] lg:w-[calc(100%-72px)]">
          <div className="max-w-[620px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-4 bg-[#FF6634]" />

              <span className="text-16px] font-bold uppercase tracking-[0.22em] text-(--orange)">
                Media
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.8rem,5vw,4.7rem)] font-normal leading-[0.88] tracking-[-0.03em]">
              Moments that Inspire
            </h1>

            <p className="mt-5 leading-relaxed text-white/65">
              Explore our collection of videos, photographs and media features
              that capture the essence of Yoga Cure Institute, its teachings,
              people and impact.
            </p>
          </div>
        </div>
      </section>

      {/* MEDIA CONTENT */}
      <section className="px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-14 lg:py-14">
        <div className="mx-auto max-w-[1250px]">
          {/* MEDIA NAVIGATION */}
          <div className="flex flex-col gap-5 border-b border-[#292725]/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("media-videos")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 text-16px] font-medium text-[#6B3020]"
              >
                <FiPlay size={10} />
                Videos
              </button>

              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("media-photographs")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 text-16px] font-medium text-[#6B3020]"
              >
                <span className="h-2 w-2 border border-[#6B3020]" />
                Photographs
              </button>
            </div>

            {/* SEARCH */}
            <div className="flex w-full items-center gap-2 border border-[#292725]/10 bg-[#F8F2E7] px-3 py-2 sm:w-[180px]">
              <FiSearch size={10} className="shrink-0 text-[#81786E]" />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search media..."
                className="w-full bg-transparent text-16px] text-[#292725] outline-none placeholder:text-[#9B9388]"
              />

              {search && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearch("")}
                  className="shrink-0 text-[#81786E] transition-colors hover:text-[#FF6634]"
                >
                  <FiX size={12} />
                </button>
              )}
            </div>
          </div>

          {!hasSearchResults ? (
            <EmptyState />
          ) : (
            <>
              {/* VIDEOS */}
              <section id="media-videos" className="pt-9">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="font-display text-[19px] text-[#5B2C22] sm:text-[21px]">
                    Videos
                  </h2>

                  <button
                    type="button"
                    onClick={() => {
                      document
                        .getElementById("media-videos")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group flex items-center gap-2 text-16px] text-[#6B3020]"
                  >
                    View All
                    <FiArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>

                {filteredVideos.length > 0 ? (
                  <div className="grid gap-5 md:grid-cols-3">
                    {filteredVideos.map((video) => (
                      <article
                        key={video.id}
                        className="group cursor-pointer"
                        onClick={() => openVideo(video)}
                      >
                        <div className="relative aspect-[1.72/1] overflow-hidden bg-[#D8CDBA]">
                          <Image
                            src={video.image}
                            alt={video.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          />

                          <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />

                          {/* PLAY */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#5B2C22] transition-transform duration-300 group-hover:scale-110">
                              <FiPlay
                                size={13}
                                fill="currentColor"
                                className="ml-0.5"
                              />
                            </div>
                          </div>

                          {/* DURATION */}
                          <span className="absolute bottom-2 right-2 bg-black/60 px-1.5 py-1 text-[6px] text-white">
                            {video.duration}
                          </span>
                        </div>

                        <h3 className="mt-2 font-display text-16px] leading-[1.2] text-[#4D3027] sm:text-[12px]">
                          {video.title}
                        </h3>

                        <p className="mt-1 text-16px] leading-[1.4] text-[#756E66]">
                          {video.category}
                        </p>
                      </article>
                    ))}
                  </div>
                ) : (
                  <EmptyState />
                )}
              </section>

              {/* PHOTOGRAPHS */}
              <section id="media-photographs" className="pt-9">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="font-display text-[19px] text-[#5B2C22] sm:text-[21px]">
                    Photographs
                  </h2>

                  <button
                    type="button"
                    onClick={() => {
                      document
                        .getElementById("media-photographs")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group flex items-center gap-2 text-16px] text-[#6B3020]"
                  >
                    View All
                    <FiArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>

                {filteredPhotos.length > 0 ? (
                  <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {filteredPhotos.map((photo) => (
                      <article
                        key={photo.id}
                        className="group cursor-pointer"
                        onClick={() => openPhoto(photo)}
                      >
                        <div className="relative aspect-square overflow-hidden bg-[#D8CDBA]">
                          <Image
                            src={photo.image}
                            alt={photo.title}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                          />

                          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
                        </div>

                        <h3 className="mt-2 font-display text-16px] leading-[1.2] text-[#4D3027] sm:text-[11px]">
                          {photo.title}
                        </h3>

                        <p className="mt-1 text-16px] leading-[1.4] text-[#756E66] sm:text-[7px]">
                          {photo.description}
                        </p>
                      </article>
                    ))}
                  </div>
                ) : (
                  <EmptyState />
                )}
              </section>
            </>
          )}
        </div>
      </section>

      {/* IMAGE LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 sm:p-10"
          onClick={closeViewer}
        >
          {/* PREVIOUS */}
          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-white/10 text-white transition-colors hover:bg-[#FF6634] sm:left-7"
          >
            <FiChevronLeft size={17} />
          </button>

          {/* NEXT */}
          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-white/10 text-white transition-colors hover:bg-[#FF6634] sm:right-7"
          >
            <FiChevronRight size={17} />
          </button>

          {/* CLOSE */}
          <button
            type="button"
            aria-label="Close image"
            onClick={(event) => {
              event.stopPropagation();
              closeViewer();
            }}
            className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center bg-white/10 text-white transition-colors hover:bg-[#FF6634]"
          >
            <FiX size={17} />
          </button>

          <div
            className="relative h-[80vh] w-full max-w-[1100px]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.image}
              alt={activeImage.title}
              fill
              sizes="90vw"
              className="object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-5 pt-16">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl text-white">
                    {activeImage.title}
                  </h2>

                  <p className="mt-1 text-[9px] text-white/60">
                    {activeImage.description}
                  </p>
                </div>

                <span className="shrink-0 text-[9px] text-white/45">
                  {viewerIndex + 1} / {viewerItems.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 sm:p-10"
          onClick={closeViewer}
        >
          {/* PREVIOUS */}
          <button
            type="button"
            aria-label="Previous video"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-white/10 text-white transition-colors hover:bg-[#FF6634] sm:left-7"
          >
            <FiChevronLeft size={17} />
          </button>

          {/* NEXT */}
          <button
            type="button"
            aria-label="Next video"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-white/10 text-white transition-colors hover:bg-[#FF6634] sm:right-7"
          >
            <FiChevronRight size={17} />
          </button>

          {/* CLOSE */}
          <button
            type="button"
            aria-label="Close video"
            onClick={(event) => {
              event.stopPropagation();
              closeViewer();
            }}
            className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center bg-white/10 text-white transition-colors hover:bg-[#FF6634]"
          >
            <FiX size={17} />
          </button>

          <div
            className="w-full max-w-[1000px]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="aspect-video overflow-hidden bg-black">
              <video
                ref={videoRef}
                key={activeVideo.id}
                src={activeVideo.video}
                poster={activeVideo.image}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="h-full w-full"
              />
            </div>

            <div className="mt-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl text-white">
                    {activeVideo.title}
                  </h2>

                  <p className="mt-1 text-[9px] text-white/55">
                    {activeVideo.category}
                  </p>
                </div>

                <span className="shrink-0 text-[9px] text-white/45">
                  {viewerIndex + 1} / {viewerItems.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="border border-[#292725]/10 py-14 text-center">
      <p className="font-display text-xl text-[#5B2C22]">No media found</p>

      <p className="mt-2 text-[9px] text-[#81786E]">
        Try a different search term.
      </p>
    </div>
  );
}
