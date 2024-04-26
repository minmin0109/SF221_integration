import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState, useEffect } from 'react';


const BookList = () => {
  //get method
const PracticeGet = () => {
  const [books, setData] = useState(null);

  useEffect(() => {
    fetchData1();
  }, []);

  const fetchData1 = async () => {
    try {
      const response = await fetch('http://localhost:3000/book-booking/book-list');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <View>
      <Text>{data ? JSON.stringify({book_id : books[0]['book_id'] , author : books[0]['author'] , title : books[0]['title'] }) : 'Loading...'}</Text>
    </View>
  );
};
PracticeGet();

  const books = [
    {
      id: 1,
      title: 'คุณอาเรียโต๊ะข้างๆ พูดภาษารัสเซียหวานใส่ซะหัวใจจะวาย',
      author: 'SunSunSun',
      imageUrl: require('../img/books/tokidoki.png'),
    },
    {
      id: 2,
      title: "มุมมองนักอ่านพระเจ้า (1)",
      author: 'Sing Shong',
      imageUrl: require('../img/books/reader.jpg'),
    },
    {
      id: 3,
      title: '極楽街\nสุขาวดีสีเลือด',
      author: 'Yuto Sano',
      imageUrl: require('../img/books/gokurakugai.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.bookContainer}>
        {books.map(book => (
          <View key={book['book_id']} style={styles.bookCard}>
            <Image source={'../img/library.png'} style={styles.bookImage} />
            <Text style={styles.bookTitle}>{book['title']}</Text>
            <Text style={styles.bookAuthor}>{book['author']}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 13,
    marginBottom: 21,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 14,
  },
  bookContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: -30,
    display: 'grid',
  },
  bookCard: {
    width: '27.5%',
    height: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    marginLeft: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  bookImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  bookTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    borderRadius: 10,
    alignContent: 'center',
    width: 'auto',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
});

export default BookList;
