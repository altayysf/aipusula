"use client";

import { useState, useMemo } from "react";
import Navbar from "../../../components/Navbar";
import BlogCard from "../../../components/BlogCard";
import { getPostsSorted, searchPosts, getUniqueCategories, paginatePosts } from "../../../data/posts";
import type { BlogPost } from "../../../data/posts";

export default function BlogTRPage() {
  const allPosts = getPostsSorted();
  const categories = getUniqueCategories("tr");

  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  // Filtreleme ve sayfalama
  const { paginatedData, totalPages } = useMemo(() => {
    let filtered = allPosts;

    // Arama
    if (searchQuery.trim()) {
      filtered = searchPosts(searchQuery, "tr");
    }

    // Kategori filtresi
    if (selectedCategory !== "all") {
      filtered = filtered.filter(post => post.categoryTR === selectedCategory);
    }

    // Sayfalama
    const paginated = paginatePosts(filtered, currentPage, postsPerPage);

    return {
      paginatedData: paginated,
      totalPages: paginated.totalPages,
    };
  }, [searchQuery, selectedCategory, currentPage, allPosts]);

  // Sayfa değiştiğinde üste scroll
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filtreleri sıfırla
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  const hasActiveFilters = searchQuery.trim() || selectedCategory !== "all";

  return (
    <>
      <Navbar lang="tr" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Blog
            </h1>
            <p className="mt-3 text-gray-700 max-w-2xl">
              Yapay zekâ ve teknoloji trendleri, incelemeler, ipuçları ve en iyi
              araç listeleri.
            </p>
          </header>

          {/* Filtreleme Alanı */}
          <div className="mb-8 space-y-4">
            {/* Arama */}
            <div className="relative">
              <input
                type="text"
                placeholder="Blog yazılarında ara... (başlık, içerik, kategori)"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Arama değiştiğinde ilk sayfaya dön
                }}
                className="w-full px-4 py-3 pl-12 pr-4 text-gray-900 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Kategori Filtreleri */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === "all"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Tümü ({allPosts.length})
              </button>

              {categories.map((category) => {
                const count = allPosts.filter(
                  (p) => p.categoryTR === category
                ).length;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      selectedCategory === category
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category} ({count})
                  </button>
                );
              })}

              {/* Filtreleri Sıfırla */}
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-red-50 text-red-600 hover:bg-red-100 transition"
                >
                  ✕ Filtreleri Temizle
                </button>
              )}
            </div>
          </div>

                    {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10">
              {/* Önceki Sayfa */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={!paginatedData.hasPrev}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  paginatedData.hasPrev
                    ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    : "bg-gray-50 text-gray-400 cursor-not-allowed"
                }`}
              >
                ← Önceki
              </button>

              {/* Sayfa Numaraları */}
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
                    // İlk 2, son 2 ve mevcut sayfa civarındaki 2 sayfayı göster
                    const showPage =
                      page === 1 ||
                      page === 2 ||
                      page === totalPages ||
                      page === totalPages - 1 ||
                      Math.abs(page - currentPage) <= 1;

                    // Nokta göster
                    const showEllipsis =
                      (page === 3 && currentPage > 4) ||
                      (page === totalPages - 2 && currentPage < totalPages - 3);

                    if (showEllipsis) {
                      return (
                        <span
                          key={page}
                          className="px-3 py-2 text-gray-400"
                        >
                          ...
                        </span>
                      );
                    }

                    if (!showPage) return null;

                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`min-w-[40px] px-3 py-2 rounded-lg font-medium transition ${
                          currentPage === page
                            ? "bg-gray-900 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  }
                )}
              </div>

              {/* Sonraki Sayfa */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={!paginatedData.hasNext}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  paginatedData.hasNext
                    ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    : "bg-gray-50 text-gray-400 cursor-not-allowed"
                }`}
              >
                Sonraki →
              </button>
            </div>
          )}

          {/* Sayfa Bilgisi */}
          {totalPages > 1 && (
            <div className="text-center mt-4 text-sm text-gray-500">
              Sayfa {currentPage} / {totalPages}
            </div>
          )}

          {/* Sonuç Sayısı */}
          {(searchQuery.trim() || selectedCategory !== "all") && (
            <div className="mb-6 text-sm text-gray-600">
              {paginatedData.posts.length === 0 ? (
                <p className="text-center py-8 text-gray-500">
                  Aradığınız kriterlere uygun blog yazısı bulunamadı. 😔
                </p>
              ) : (
                <p>
                  <strong>{paginatedData.posts.length}</strong> yazı bulundu
                  {searchQuery.trim() && (
                    <span> - "{searchQuery}" için sonuçlar</span>
                  )}
                </p>
              )}
            </div>
          )}

          {/* Blog Kartları */}
          {paginatedData.posts.length > 0 ? (
            <div className="grid gap-5 mb-10">
              {paginatedData.posts.map((post) => (
                <BlogCard key={post.slug} lang="tr" post={post} />
              ))}
            </div>
          ) : null}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10">
              {/* Önceki Sayfa */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={!paginatedData.hasPrev}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  paginatedData.hasPrev
                    ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    : "bg-gray-50 text-gray-400 cursor-not-allowed"
                }`}
              >
                ← Önceki
              </button>

              {/* Sayfa Numaraları */}
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
                    // İlk 2, son 2 ve mevcut sayfa civarındaki 2 sayfayı göster
                    const showPage =
                      page === 1 ||
                      page === 2 ||
                      page === totalPages ||
                      page === totalPages - 1 ||
                      Math.abs(page - currentPage) <= 1;

                    // Nokta göster
                    const showEllipsis =
                      (page === 3 && currentPage > 4) ||
                      (page === totalPages - 2 && currentPage < totalPages - 3);

                    if (showEllipsis) {
                      return (
                        <span
                          key={page}
                          className="px-3 py-2 text-gray-400"
                        >
                          ...
                        </span>
                      );
                    }

                    if (!showPage) return null;

                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`min-w-[40px] px-3 py-2 rounded-lg font-medium transition ${
                          currentPage === page
                            ? "bg-gray-900 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  }
                )}
              </div>

              {/* Sonraki Sayfa */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={!paginatedData.hasNext}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  paginatedData.hasNext
                    ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    : "bg-gray-50 text-gray-400 cursor-not-allowed"
                }`}
              >
                Sonraki →
              </button>
            </div>
          )}

          {/* Sayfa Bilgisi */}
          {totalPages > 1 && (
            <div className="text-center mt-4 text-sm text-gray-500">
              Sayfa {currentPage} / {totalPages}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
