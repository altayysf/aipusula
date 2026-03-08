"use client";

import { useState, useMemo } from "react";
import Navbar from "../../../components/Navbar";
import BlogCard from "../../../components/BlogCard";
import { getPostsSorted, searchPosts, getUniqueCategories, paginatePosts } from "../../../data/posts";
import type { BlogPost } from "../../../data/posts";

export default function BlogENPage() {
  const allPosts = getPostsSorted();
  const categories = getUniqueCategories("en");

  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  // Filtering and pagination
  const { paginatedData, totalPages } = useMemo(() => {
    let filtered = allPosts;

    // Search
    if (searchQuery.trim()) {
      filtered = searchPosts(searchQuery, "en");
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(post => post.categoryEN === selectedCategory);
    }

    // Pagination
    const paginated = paginatePosts(filtered, currentPage, postsPerPage);

    return {
      paginatedData: paginated,
      totalPages: paginated.totalPages,
    };
  }, [searchQuery, selectedCategory, currentPage, allPosts]);

  // Scroll to top when page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  const hasActiveFilters = searchQuery.trim() || selectedCategory !== "all";

  return (
    <>
      <Navbar lang="en" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          {/* Header - Hafif görsellik */}
          <header className="mb-10 pb-8 border-b border-gray-100">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
              Blog
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl leading-relaxed mb-4">
              AI and technology trends, reviews, tips, and the best tool lists.
            </p>
            
            {/* Küçük istatistikler */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1.5">
                <span className="text-lg">📚</span>
                <strong className="text-gray-900">{allPosts.length}</strong> posts
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-lg">🏷️</span>
                <strong className="text-gray-900">{categories.length}</strong> categories
              </span>
            </div>
          </header>

          {/* Filtreleme Alanı */}
          <div className="mb-8 space-y-6">
            {/* Arama - Daha modern */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search blog posts... (title, content, category)"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-5 py-3.5 pl-12 pr-5 text-gray-900 font-medium bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder:text-gray-500 placeholder:font-normal transition-all shadow-sm hover:border-gray-300"
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

            {/* Kategori Filtreleri - Daha aralıklı */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setCurrentPage(1);
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${
                  selectedCategory === "all"
                    ? "bg-gray-900 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                All ({allPosts.length})
              </button>

              {categories.map((category) => {
                const count = allPosts.filter(
                  (p) => p.categoryEN === category
                ).length;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${
                      selectedCategory === category
                        ? "bg-gray-900 text-white shadow-md"
                        : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
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
                  className="px-5 py-2.5 rounded-full text-sm font-semibold bg-red-50 text-red-600 hover:bg-red-100 transition-all border border-red-200 shadow-sm"
                >
                  ✕ Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Sonuç Sayısı */}
          {(searchQuery.trim() || selectedCategory !== "all") && (
            <div className="mb-6 text-sm text-gray-600">
              {paginatedData.posts.length === 0 ? (
                <p className="text-center py-8 text-gray-500">
                  No blog posts found matching your criteria. 😔
                </p>
              ) : (
                <p>
                  <strong>{paginatedData.posts.length}</strong> posts found
                  {searchQuery.trim() && (
                    <span> - results for "{searchQuery}"</span>
                  )}
                </p>
              )}
            </div>
          )}

          {/* Blog Kartları - 2 sütunlu grid */}
          {paginatedData.posts.length > 0 ? (
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paginatedData.posts.map((post) => (
                  <article key={post.slug}>
                    <BlogCard lang="en" post={post} />
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {/* Pagination - Daha modern */}
          {totalPages > 1 && (
            <nav className="flex justify-center items-center gap-2 mt-10">
              {/* Önceki Sayfa */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={!paginatedData.hasPrev}
                className={`px-5 py-2.5 rounded-xl font-semibold transition-all shadow-sm ${
                  paginatedData.hasPrev
                    ? "bg-white text-gray-900 hover:bg-gray-50 border border-gray-200"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                }`}
              >
                ← Previous
              </button>

              {/* Sayfa Numaraları */}
              <div className="flex gap-1.5">
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
                        className={`min-w-[44px] px-4 py-2.5 rounded-xl font-semibold transition-all shadow-sm ${
                          currentPage === page
                            ? "bg-gray-900 text-white shadow-md"
                            : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
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
                className={`px-5 py-2.5 rounded-xl font-semibold transition-all shadow-sm ${
                  paginatedData.hasNext
                    ? "bg-white text-gray-900 hover:bg-gray-50 border border-gray-200"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                }`}
              >
                Next →
              </button>
            </nav>
          )}

          {/* Sayfa Bilgisi */}
          {totalPages > 1 && (
            <div className="text-center mt-5 text-sm text-gray-600">
              Page <strong className="text-gray-900">{currentPage}</strong> / <strong className="text-gray-900">{totalPages}</strong>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
