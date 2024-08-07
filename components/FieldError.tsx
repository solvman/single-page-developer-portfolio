import { IconError } from "./Icons";

type PropsType = {
  error?: string;
};

function FieldError({ error }: PropsType) {
  if (!error) return null;

  return (
    <>
      <div className="absolute bottom-4 right-0">
        <IconError />
      </div>
      <div className="absolute -bottom-6 right-0">
        <em className="error-text not-italic">{error}</em>
      </div>
    </>
  );
}
export default FieldError;
