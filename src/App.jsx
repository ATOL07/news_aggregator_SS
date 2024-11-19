// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import NewsList from './components/NewsList';
// import BookmarkList from './components/BookmarkList';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import './styles.css';


// function App() {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme');
//     if (storedTheme) {
//       setTheme(storedTheme);
//       document.documentElement.classList.toggle('dark', storedTheme === 'dark');
//     }
//   }, []);

//   const categories = [
//     { name: 'Technology', path: '/category/technology' },
//     { name: 'Sports', path: '/category/sports' },
//     { name: 'Business', path: '/category/business' },
//     { name: 'Entertainment', path: '/category/entertainment' },
//     { name: 'Health', path: '/category/health' },
//   ];

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     document.documentElement.classList.toggle('dark', newTheme === 'dark');
//     localStorage.setItem('theme', newTheme);
//   };

//   return (
//     <Router>
//       <div className={`font-sans ${theme === 'dark' ? 'dark' : ''} transition-colors`}>
//         {/* Navbar */}
//         <Navbar theme={theme} toggleTheme={toggleTheme} categories={categories} />

//         {/* Main Content */}
//         <main className="pt-20 pb-16 md:pt-24 md:pb-24 container mx-auto px-4 space-y-8">
//           <Routes>
//             <Route path="/" element={<NewsList />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/bookmarks" element={<BookmarkList />} />
//             {categories.map((category) => (
//               <Route
//                 key={category.name}
//                 path={category.path}
//                 element={<NewsList category={category.name.toLowerCase()} />}
//               />
//             ))}
//           </Routes>
//         </main>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import NewsList from './components/NewsList';
import BookmarkList from './components/BookmarkList';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './styles.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }
  }, []);

  const categories = [
    { name: 'Technology', path: '/category/technology' },
    { name: 'Sports', path: '/category/sports' },
    { name: 'Business', path: '/category/business' },
    { name: 'Entertainment', path: '/category/entertainment' },
    { name: 'Health', path: '/category/health' },
  ];

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Router>
      <div
        className={`font-sans transition-colors ${
          theme === 'dark' ? 'background-dark' : 'background-light'
        }`}
      >
        {/* Navbar */}
        <Navbar theme={theme} toggleTheme={toggleTheme} categories={categories} />

        {/* Main Content */}
        <main className="pt-20 pb-16 md:pt-24 md:pb-24 container mx-auto px-4 space-y-8">
          <Routes>
            <Route path="/" element={<NewsList />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bookmarks" element={<BookmarkList />} />
            {categories.map((category) => (
              <Route
                key={category.name}
                path={category.path}
                element={<NewsList category={category.name.toLowerCase()} />}
              />
            ))}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

