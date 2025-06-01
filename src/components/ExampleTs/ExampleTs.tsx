// 1. Define the type outside the component
type GreetingProps = {
  name: string;
  age?: number; // optional
};

export default function ExampleTs() {
  // 2. Create a user object with the defined type
  const user: GreetingProps = {
    name: "Alice",
    age: 25,
  };

  // 3. Render the user data
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <p className="text-sm text-gray-500 mb-2">Ex: 01</p>
      <h1 className="text-gray-700">Hello, {user.name}!</h1>
      {user.age && (
        <p className="text-gray-700 mt-1">You are {user.age} years old.</p>
      )}
    </div>
  );
}
