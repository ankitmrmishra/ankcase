import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export async function GET() {
  return new ImageResponse(
    (
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
          <div tw="bg-gray-50 flex w-full">
            <div tw="flex flex-col  w-full py-12 px-4 items-start justify-between p-8">
              <div tw="flex flex-col md:flex-row md:items-center justify-between text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                </svg>
                <span className="ml-2 text-2xl font-bold">CustomGear</span>
              </div>

              <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
                <span tw="text-indigo-600">
                  Make your Gears look 10x Personal, Beautiful and Creative
                </span>
                <span tw="text-gray-400 text-sm">
                  Create custom Gears with your photos or let our AI design
                  something amazing for you.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
