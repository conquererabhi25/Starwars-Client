import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../features/characters/charactersSlice';
import Loader from '../component/Loader';

const CharacterList = () => {
  const dispatch = useDispatch();
  const { characters, status, next, previous } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const handleNext = () => {
    if (next) dispatch(fetchCharacters(next));
  };

  const handlePrevious = () => {
    if (previous) dispatch(fetchCharacters(previous));
  };

  return (
    <div className="container mx-auto p-4">
      {status === 'loading' && <Loader />}
      {status === 'succeeded' && (
        <>
          <table className="sm:min-w-full bg-white w-[90vw]">
            <thead className="bg-gray-800 text-white w-[90vw]">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold sm:text-sm text-xs">Name</th>
                <th className="text-left py-3 px-4 uppercase font-semibold sm:text-sm text-xs">Height</th>
                <th className="text-left py-3 px-4 uppercase font-semibold sm:text-sm text-xs">Mass</th>
                <th className="text-left py-3 px-4 uppercase font-semibold sm:text-sm text-xs">Birth Year</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 w-[90vw]">
              {characters.map((character) => (
                <tr key={character.name}>
                  <td className="text-left py-3 px-4">{character.name}</td>
                  <td className="text-left py-3 px-4">{character.height}</td>
                  <td className="text-left py-3 px-4">{character.mass}</td>
                  <td className="text-left py-3 px-4">{character.birth_year}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <button
              className="bg-red-800 text-white py-2 px-4 rounded"
              onClick={handlePrevious}
              disabled={!previous}
            >
              Previous
            </button>
            <button
              className="bg-blue-800 text-white py-2 px-4 rounded"
              onClick={handleNext}
              disabled={!next}
            >
              Next
            </button>
          </div>
        </>
      )}
      {status === 'failed' && <p>Error loading characters.</p>}
    </div>
  );
};

export default CharacterList;
