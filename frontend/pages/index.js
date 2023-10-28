import React from 'react';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Operation: Elysium Rescue</h1>
            <p>Step into the unparalleled shoes of Dr. A. I. Virtuoso and help Ironman to ensure optimal performance of Elysium Innovations' technological ecosystem.</p>
            <Link href="/game">
                <a>Start Game</a>
            </Link>
        </div>
    );
};

export default HomePage;