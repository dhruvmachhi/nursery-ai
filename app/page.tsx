"use client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import BookList from "@/lib/books";
import useBookState, { Book } from "@/lib/store";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export function BookCard({ book } : {book: Book}) {
  const setBook = useBookState((state) => state.setBook);

  return (
    <Card>
      <CardContent className="flex aspect-square justify-center items-center flex-col p-6 gap-2">
        <p className="font-bold text-xl">{book.title}</p>
        <p className="font-bold text-md text-gray-600">By: {book.author}</p>
        <img src={book.coverURL} className="object-cover max-w-40 aspect-square"></img>
        <Button onClick={() =>{setBook(book); redirect("/reader")}}>Start Reading</Button>
      </CardContent>
    </Card>
  )
}

const books = BookList["library"];

export default function Library() {
  const currentBook = useBookState((state) => state.book);

  return (
    <>
    <Header title="Library" />
    <main className="flex justify-center p-3">
      <Carousel className="w-[300px]">
        <CarouselContent>
          {books.map((_book, index) => (
            <CarouselItem key={index}>
              <BookCard book={_book} />
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
    </>
  );
}
