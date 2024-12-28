import React from 'react'
import { useSearch } from '../SearchContext';

function RecommendTags() {
    const tags = ["All Products", "Nike", "Adidas", "Puma", "Vans"];
    const {selectedTag, setSelectedTag} = useSearch();

    const handleTag = (tag) => {
        setSelectedTag(tag);
    };

    return (
        <div className="w-full py-5 px-12">
            <h1 className="text-xl font-medium mb-1">Recommended</h1>
            <div className="flex flex-wrap gap-2 py-1">
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        onClick={() => handleTag(tag)}
                        className={`text-sm border px-3 py-1 rounded-sm cursor-pointer shadow-sm ${
                            selectedTag === tag ? "bg-gray-100" : "hover:bg-slate-50"
                        }`}
                    >
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecommendTags