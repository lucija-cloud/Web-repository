document.addEventListener('DOMContentLoaded', function() {
    console.log("Website loaded successfully!");

    // Placeholder function to load latest blog posts
    // In a real application, this would fetch data from a server or CMS
    function loadLatestPosts() {
        const latestPostsContainer = document.getElementById('latest-posts');
        if (latestPostsContainer) {
            // Clear the loading message
            latestPostsContainer.innerHTML = '<h2>Latest Insights</h2>';

            // Sample post data (replace with actual data fetching)
            const posts = [
                { title: "The Introverted Woman's Gentle Guide to Setting Boundaries", link: "articles/setting-boundaries-guide.html", excerpt: "Learn why boundaries are vital self-care and practical ways for saying no without guilt..." }, // Added new article
                { title: "Feeling Misunderstood? How Introverted Women Can Communicate Their Needs Effectively", link: "articles/feeling-misunderstood.html", excerpt: "Do you ever feel like you're speaking a different language? Explore why this happens and learn effective strategies..." },
                { title: "Finding Joy in Solitude", link: "articles/joy-in-solitude.html", excerpt: "Explore how embracing quiet moments can recharge your energy..." },
                { title: "Setting Gentle Boundaries", link: "articles/gentle-boundaries.html", excerpt: "Learn practical tips for protecting your peace without conflict..." }, // Note: This might be redundant now with the new guide
                { title: "Mindful Journaling for Introverts", link: "articles/mindful-journaling.html", excerpt: "Discover journaling prompts designed for self-reflection..." }
            ];

            if (posts.length === 0) {
                latestPostsContainer.innerHTML += '<p>No recent posts available.</p>';
            } else {
                posts.forEach(post => {
                    const postElement = document.createElement('article');
                    postElement.classList.add('post-preview');
                    postElement.innerHTML = `
                        <h3><a href="${post.link}">${post.title}</a></h3>
                        <p>${post.excerpt}</p>
                        <a href="${post.link}" class="read-more">Read More</a>
                    `;
                    latestPostsContainer.appendChild(postElement);
                });
            }
        }
    }

    // Load posts on the home page
    if (document.getElementById('latest-posts')) {
        loadLatestPosts();
    }

});