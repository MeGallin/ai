import { useState, ChangeEvent, FormEvent } from 'react';
import { useAuth, useUser } from '@clerk/clerk-react';

const DashboardComponent = () => {
  const { signOut } = useAuth();
  const { user } = useUser();
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setFile(file);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      alert('Please select a file first.');
      return;
    }
    console.log(file);
    // Create a new FormData instance
    const formData = new FormData();
    // Append file and other necessary data to the form data
    formData.append('files', file);
    formData.append('chunkSize', '500');
    formData.append('chunkOverlap', '250');
    formData.append('separators', '');
    formData.append('returnSourceDocuments', 'true');

    try {
      // Make a POST request to upload the file
      const response = await fetch(
        `https://flowise-ai-cls.onrender.com/api/v1/vector/upsert/${import.meta.env.VITE_FLOWISE_UPSERT_ID}`,

        {
          mode: 'no-cors',
          method: 'POST',
          body: formData,
        },
      );

      // Parse the response JSON
      const result = await response.json();
      console.log({ result });
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle errors gracefully, e.g., display a user-friendly message

      alert('An error occurred while uploading the file.');
    }
  };

  return (
    <>
      <h1>Dashboard Component</h1> {/* Corrected spelling of 'Dashboard' */}
      <h3>Welcome {user?.fullName}</h3>
      <form onSubmit={handleSubmit}>
        {/* Input field for selecting a file */}
        <input type="file" onChange={handleFileChange} />
        {/* Button to submit the form */}
        <button type="submit">Upload File</button>
      </form>
      {/* Button to log out */}
      <button type="button" onClick={() => signOut()}>
        Log Out
      </button>
    </>
  );
};

export default DashboardComponent; // Corrected spelling of 'DashboardComponent' in export
