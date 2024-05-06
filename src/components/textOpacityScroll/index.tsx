'use client';
import Word from '@/components/textOpacityScroll/Word';

export default function index({paragraph}:{paragraph: string}) {
  return (
    <>
      <Word paragraph={paragraph} />
    </>
  );
}