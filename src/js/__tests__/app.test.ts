import Cart from '../app';

test('movie should be added to cart', () => {
    const movie = new Cart();

    movie.add({
        engName: 'Avengers',
        ruName: 'Мстители',
        quality: 'IMAX',
        country: 'USA',
        year: 2012,
        genre: 'adventure',
        tagline: 'Avengers Assemble!',
        duration: 137
    });
    
    expect(movie.getAll()).toEqual([{
        engName: 'Avengers',
        ruName: 'Мстители',
        quality: 'IMAX',
        country: 'USA',
        year: 2012,
        genre: 'adventure',
        tagline: 'Avengers Assemble!',
        duration: 137
    }])
    
})