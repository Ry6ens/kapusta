export default function ArrowRight({ width, height, fill = '#52555f' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={width}
      height={height}
      fill={fill}
    >
      <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 29C8.82 29 3 23.18 3 16S8.82 3 16 3s13 5.82 13 13-5.82 13-13 13z" />
      <path d="m11.086 22.086 2.829 2.829 8.914-8.914-8.914-8.914-2.828 2.828 6.086 6.086z" />
    </svg>
  );
}
