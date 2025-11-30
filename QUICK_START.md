# Quick Start: Adding the Footer to Your App

## Step 1: Import the Component

Add this to the top of your `src/App.jsx`:

```jsx
import HoverFooter from "@/components/demo/HoverFooter"
```

## Step 2: Add to Your JSX

Add the footer component at the end of your main app div:

```jsx
function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-gray-300">
      {/* Your existing content */}
      
      {/* Add this at the bottom */}
      <HoverFooter />
    </div>
  )
}
```

## Step 3: Ensure Dark Background

For the footer to look best, add a dark background to your app. In `src/index.css`, you should have:

```css
body {
  background-color: #0A0A0C;
  color: #e5e7eb;
}
```

## Complete Example

```jsx
// src/App.jsx
import HoverFooter from "@/components/demo/HoverFooter"
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-gray-300">
      <header className="p-8">
        <h1 className="text-4xl font-bold text-white">
          My Website
        </h1>
      </header>

      <main className="container mx-auto p-8">
        {/* Your page content */}
        <p className="text-lg">
          Welcome to my website with an amazing footer!
        </p>
      </main>

      {/* Footer - automatically sticks to bottom */}
      <HoverFooter />
    </div>
  )
}

export default App
```

## That's It! 🎉

Your footer is now live. Just refresh your browser to see it in action.

### Test the Features:
1. **Scroll to the bottom** of your page
2. **Hover over the large text** (on desktop) to see the gradient effect
3. **Try clicking** the social icons and links
4. **Resize your browser** to see responsive behavior

### Customize:
Edit `src/components/demo/HoverFooter.tsx` to change:
- Brand name and logo
- Links and sections
- Contact information
- Social media links
- Colors and styling
