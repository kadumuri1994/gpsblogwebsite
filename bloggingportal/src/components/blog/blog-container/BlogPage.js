import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Blog } from '../blog-presentation/Blog';
import {getBlogDetails} from '../../../api/blogApi';
import draftToHtml from 'draftjs-to-html';

function BlogPage(props) {
    let { id } = useParams();
    const [blogDetails, setBlogDetails] = useState(null);

    useEffect(() => {
        getBlogDetails(id)
            .then(res => {
                const mainContentHTMLString = draftToHtml(res.mainContent);
                setBlogDetails({
                    title: res.title,
                    category: res.category,
                    headerContent: res.headerContent,
                    mainContent: mainContentHTMLString,
                    likes: res.likes,
                    comments: res.comments,
                    featuredBlog: res.featuredBlog,
                    lastActiveAt: res.lastActiveAt,
                    status: res.status
                });
            })
            .catch(err => console.log("Error fetching blog details", err));
    }, []);

    return <Blog blogDetails = {blogDetails} />;
}

export default BlogPage;

