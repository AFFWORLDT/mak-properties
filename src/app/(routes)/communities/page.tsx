"use client";
import { getAllCommunities } from "@/src/api/communities";
import CommunitiesCard from "@/src/view/communities/communitiesCard";
import { Loader } from "lucide-react";
import React, { useEffect, useState, useRef, useCallback } from "react";

const PAGE_SIZE = 12;

function Communities() {
  const [communities, setCommunities] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredCommunities, setFilteredCommunities] = useState<any[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastCommunityRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    const fetchCommunities = async () => {
      setLoading(true);
      try {
        const res = await getAllCommunities(page, PAGE_SIZE);
        if (res?.communities?.length) {
          setCommunities((prev) => {
            const newCommunities = [...prev, ...res.communities];
            setHasMore(newCommunities.length < res.total);
            return newCommunities;
          });
          setTotal(res.total);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCommunities();
  }, [page]);

  // Filter communities based on search keyword
  useEffect(() => {
    if (searchKeyword.trim() === "") {
      setFilteredCommunities(communities);
    } else {
      const filtered = communities.filter((community) =>
        community.name?.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        community.location?.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        community.description?.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setFilteredCommunities(filtered);
    }
  }, [communities, searchKeyword]);

  return (
    <div>
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#dbbb90]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#C2A17B]/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-8 text-gray-800 font-serif leading-tight">
            <span className="text-[#dbbb90] font-normal">Luxury</span> Communities
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] mx-auto mb-8"></div>
        </div>
      </section>
      <div className="mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 font-serif">
            Unveiling Dubai&rsquo;s <span className="text-[#dbbb90] font-normal">Vibrant</span> Communities
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-serif">
            Dubai is a city of diverse neighborhoods, each offering a unique
            character &amp; lifestyle. Beyond the stunning architecture, your
            bespoke community awaits. Explore the soul of Dubai&rsquo;s
            communities, ensuring your new property seamlessly integrates with
            your personal demographics &amp; desired lifestyle.
          </p>
        </div>
        
        {/* Enhanced Search Input */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-2xl">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-[#dbbb90]/20 shadow-xl p-2">
              <input
                type="text"
                placeholder="Search communities by name, location, or description..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full px-6 py-4 pl-14 text-gray-800 bg-transparent border-0 rounded-xl focus:outline-none placeholder:text-gray-500 font-serif text-lg"
              />
              <svg
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#dbbb90]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Search Results Counter */}
        {searchKeyword && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-[#dbbb90]/10 rounded-full border border-[#dbbb90]/20">
              <p className="text-[#dbbb90] font-medium font-serif">
                Found {filteredCommunities.length} community{filteredCommunities.length !== 1 ? 'ies' : 'y'} matching "{searchKeyword}"
              </p>
            </div>
          </div>
        )}

        {/* Communities Stats */}
        {!searchKeyword && communities.length > 0 && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#dbbb90]/20 shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-light text-[#dbbb90] font-serif">{total}</p>
                <p className="text-sm text-gray-600 font-serif">Total Communities</p>
              </div>
              <div className="w-px h-8 bg-[#dbbb90]/20"></div>
              <div className="text-center">
                <p className="text-2xl font-light text-[#dbbb90] font-serif">{communities.length}</p>
                <p className="text-sm text-gray-600 font-serif">Loaded</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 container mx-auto max-w-7xl">
          {filteredCommunities.map((community, i) => {
            if (i === filteredCommunities.length - 1) {
              return (
                <div ref={lastCommunityRef} key={i}>
                  <CommunitiesCard data={community} />
                </div>
              );
            }
            return <CommunitiesCard key={i} data={community} />;
          })}
        </div>
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-[#dbbb90]/30 border-t-[#dbbb90] rounded-full animate-spin mb-4"></div>
              <p className="text-[#dbbb90] font-medium font-serif">Loading Communities...</p>
            </div>
          </div>
        )}
        {!hasMore && communities.length > 0 && (
          <div className="text-center py-8">
            <div className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-full">
              <p className="text-gray-600 font-medium font-serif">All communities loaded</p>
            </div>
          </div>
        )}
        {searchKeyword && filteredCommunities.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#dbbb90]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2 font-serif">No communities found</h3>
              <p className="text-gray-600 font-serif">No communities match "{searchKeyword}"</p>
              <p className="text-sm text-gray-500 mt-2 font-serif">Try adjusting your search terms</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Communities;
