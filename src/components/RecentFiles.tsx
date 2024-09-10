import { useStore } from "@tanstack/react-store";
import store from "../store";

const RecentFiles: React.FC = () => {
  const files = useStore(store, (state) => state.files);

  return (
    <div>
      {files && files.length > 0 && (
        <ul>
          {files.map((file) => (
            <li>{file}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentFiles;
