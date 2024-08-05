import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Simulate an error after component mount
    setTimeout(() => {
      throw new Error('This is a test error');
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Test Error App</h1>
        <p className="text-xl text-gray-600">An error will occur shortly after this page loads.</p>
      </div>
    </div>
  );
};

export default Index;
