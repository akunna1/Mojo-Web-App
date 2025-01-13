'use client';

import React, { useState } from 'react';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { IoIosArrowDown } from 'react-icons/io';
import { FaSave, FaPen } from 'react-icons/fa';
import { db } from '../firebase/config';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const Hero4 = () => {
  const [emotion, setEmotion] = useState<string>('');
  const [resource, setResource] = useState<string>('');
  const [resourceText, setResourceText] = useState<string>('');
  const [editMode, setEditMode] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [contentFetched, setContentFetched] = useState<boolean>(false);

  const fetchContent = async () => {
    if (emotion && resource) {
      try {
        const docRef = doc(db, 'emotions', emotion, resource, 'content');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setResourceText(docSnap.data().text || '');
        } else {
          setResourceText('No content here yet. Please add some.');
        }
        setContentFetched(true);
      } catch (err) {
        setError('Failed to fetch content from Firestore');
      }
    }
  };

  const handleSave = async () => {
    if (emotion && resource && resourceText) {
      try {
        const docRef = doc(db, 'emotions', emotion, resource, 'content');
        await setDoc(docRef, { text: resourceText }, { merge: true });
        setEditMode(false);
        setError('');
      } catch (err) {
        setError('Failed to save content to Firestore');
      }
    }
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleChangeEmotion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEmotion(e.target.value);
    setResourceText('');
    setContentFetched(false);
  };

  const handleChangeResource = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setResource(e.target.value);
    setResourceText('');
    setContentFetched(false);
  };

  return (
    <div className="h-dvh mb-10">
      <div className="text-center p-7">
        <h1 className="text-3xl md:text-4xl font-extrabold text-black uppercase">Help Center</h1>
        <p>
          <TfiLayoutLineSolid className="text-[#FFC107] inline" style={{ strokeWidth: 2 }} />
          <TfiLayoutLineSolid className="text-[#FFC107] inline" style={{ strokeWidth: 2 }} />
          <TfiLayoutLineSolid className="text-[#FFC107] inline" style={{ strokeWidth: 2 }} />
          <TfiLayoutLineSolid className="text-[#FFC107] inline" style={{ strokeWidth: 2 }} />
        </p>
        <p className="text-gray-400 text-sm md:text-base mb-8">Remember, consistency is the key!</p>

        <form className="mt-6 space-y-6">
          <div>
            <p className="text-lg text-gray-700 font-semibold mb-2">How are you feeling today, darling?</p>
            <div className="relative w-full px-5">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent appearance-none"
                onChange={handleChangeEmotion}
                value={emotion}
              >
                <option value="" disabled>--- Select an emotion ---</option>
                <option value="afraid">Afraid and Anxious &#128552;</option>
                <option value="angry">Angry &#128545;</option>
                <option value="ashamed">Ashamed &#128534;</option>
                <option value="discouraged">Discouraged and Overwhelmed &#129301;</option>
                <option value="happy">Happy and Grateful &#128513;</option>
                <option value="incompetent">Incompetent &#128549;</option>
                <option value="irritated">Mildly Irritated &#128580;</option>
                <option value="neutral">Neutral &#128528;</option>
                <option value="sad">Sad &#128546;</option>
              </select>
              <IoIosArrowDown className="absolute right-10 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-700 font-semibold mb-2">What resource would you like for that?</p>
            <div className="relative w-full px-5">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent appearance-none"
                onChange={handleChangeResource}
                value={resource}
              >
                <option value="" disabled>--- Select a resource ---</option>
                <option value="books">Books &#128214;</option>
                <option value="music">Music &#127926;</option>
                <option value="quotes">Quotes &#128172;</option>
                <option value="videos">Videos &#128250;</option>
              </select>
              <IoIosArrowDown className="absolute right-10 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <button
            type="button"
            className="w-fit border-2 text-gray-600 font-semibold border-[#FFC107] py-2 px-8 rounded-full hover:bg-[#FFC107] transition-colors"
            onClick={fetchContent}
            disabled={!emotion || !resource}
          >
            Tell Me
          </button>

          {!emotion || !resource ? (
            <div className="px-5 mt-6">
              <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
                <p className="text-center text-xl font-medium text-gray-600">Self Help Resources...</p>
              </div>
            </div>
          ) : (
            !contentFetched && (
              <div className="px-5 mt-6">
                <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
                  <p className="text-lg text-center">Waiting on you...</p>
                </div>
              </div>
            )
          )}

          {contentFetched && (
            <div className="px-5 mt-6">
              <div className="p-4 border border-gray-300 rounded-lg bg-gray-50 relative">
                <div className="absolute top-4 right-4">
                  {editMode ? (
                    <FaSave className="cursor-pointer text-gray-700" onClick={handleSave} />
                  ) : (
                    <FaPen className="cursor-pointer text-gray-700" onClick={handleEditToggle} />
                  )}
                </div>
                {editMode ? (
                  <textarea
                    className="w-full mt-10 p-4 border border-gray-300 rounded-lg"
                    value={resourceText}
                    onChange={(e) => setResourceText(e.target.value)}
                  />
                ) : (
                  <p className="text-lg mt-10">{resourceText || 'Waiting on you...'}</p>
                )}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Hero4;
