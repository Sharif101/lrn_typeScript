// 1. Define the type outside the component
type GreetingProps = {
  name: string;
  age?: number; // optional
};

export default function DataType() {
  // 2. Create a user object with the defined type
  const user: GreetingProps = {
    name: "Alice",
    age: 25,
  };

  // 3. Render the user data
  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto mt-6">
      <p className="text-sm text-gray-500 mb-2">Ex: 01</p>
      <h1 className="text-xl font-bold text-gray-800 mb-2">
        Hello, {user.name}!
      </h1>
      {user.age && (
        <p className="text-gray-700 text-base">You are {user.age} years old.</p>
      )}
    </div>
  );
}
