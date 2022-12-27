export default function FormInputFile({ register }) {
  return <input type="file" accept="image/png, image/jpeg" {...register('avatar')} />;
}
