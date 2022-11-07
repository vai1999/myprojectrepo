import React from 'react'


export default function Home() {
  return (

    <>
      <div class="flex-grow text-gray-800">
        <header class="flex items-center h-20 px-6 sm:px-10 bg-indigo-300">
          <button class="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
            <span class="sr-only">Menu</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>

          <div class="flex flex-shrink-0 items-center ml-auto">

            <button class="relative p-2 text-black-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <div class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-red-600">1+</div>
            </button>
            <button type="button" class="inline-flex relative items-center p-3 text-sm font-medium text-center text-gray-800  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              <div class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-red-600">1</div>
            </button>
            <div class="border-l pl-3 ml-3 space-x-1">
              <button class="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                <span class="sr-only">User Menu</span>
                <div class="hidden md:flex md:flex-col md:items-end md:leading-tight">
                  <span class="font-semibold">Grace Simmons</span>
                  <span class="text-sm text-gray-600">Lecturer</span>
                </div>
                <span class="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="user profile" class="h-full w-full object-cover" />
                </span>
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" class="hidden sm:block h-6 w-6 text-gray-300">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <main class="p-6 sm:p-10 space-y-6">
          <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div class="mr-6">
              <h1 class="text-4xl font-semibold mb-2">Dashboard</h1>
            </div>

          </div>
          <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div class="flex items-center p-8 bg-white shadow rounded-lg">
              <div>
                <span class="block text-gray-500">SCHEDULE</span>
                <span class="block text-2xl font-bold">$40,000</span>

              </div>
              <div class="mr-20"></div>
              <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-8">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>

            </div>
            <div class="flex items-center p-8 bg-white shadow rounded-lg">

              <div>
                <span class="block text-gray-500">SALES</span>
                <span class="block text-2xl font-bold">650</span>

              </div>
              <div class="mr-28"></div>
              <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>

            </div>
            <div class="flex items-center p-8 bg-white shadow rounded-lg">

              <div>
                <span class="block text-gray-500">NEW USER</span>
                <span class="inline-block text-2xl font-bold">366</span>

              </div>
              <div class="mr-20"></div>
              <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>

            </div>
            <div class="flex items-center p-8 bg-white shadow rounded-lg">
              <div>
                <span class="block text-gray-500">PENDING REQUESTS</span>
                <span class="block text-2xl font-bold">18</span>

              </div>
              <div class="mr-20"></div>
              <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              </div>

            </div>
          </section>
          <section class="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
            <div class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
              <div class="px-6 py-5 font-semibold border-b text-blue-600 border-gray-100">Products sold</div>
              <div class="p-4 flex-grow">

                <div class="mb-1 text-lg font-medium dark:text-white">TShirt</div>
                <div class="mb-4 w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div class="h-4 bg-yellow-600 rounded-full dark:bg-blue-500" style={{ width: '25%' }}></div>
                </div>
                <div class="mb-1 text-lg font-medium dark:text-white">Hat</div>
                <div class="mb-4 w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div class="h-4 bg-green-600 rounded-full dark:bg-blue-500" style={{ width: '50%' }}></div>
                </div>
                <div class="mb-1 text-lg font-medium dark:text-white">Racing Car</div>
                <div class="mb-4 w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div class="h-4 bg-red-600 rounded-full dark:bg-blue-500" style={{ width: '75%' }}></div>
                </div>
                <div class="mb-1 text-lg font-medium dark:text-white">Remote Control Bus</div>
                <div class="mb-4 w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div class="h-4 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
            <div class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                  Invoice
                </caption>
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="py-3 px-6">
                      OrderId
                    </th>
                    <th scope="col" class="py-3 px-6">
                      Customer
                    </th>
                    <th scope="col" class="py-3 px-6">
                      Item
                    </th>
                    <th scope="col" class="py-3 px-6">
                      Status
                    </th>
                    <th scope="col" class="py-3 px-6">
                      Action
                      <span class="sr-only">Detail</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      RA05449
                    </th>
                    <td class="py-4 px-6">
                      Sliver
                    </td>
                    <td class="py-4 px-6">
                      Laptop
                    </td>
                    <td class="py-4 px-6">
                      <button class="flex ml-auto text-white bg-green-600 border-0 py-2 px-4 focus:outline-none hover:bg-green-700 rounded">Delivered</button>
                    </td>
                    <td class="py-4 px-6 text-right">
                      <button class="flex ml-auto text-white bg-blue-600 border-0 py-2 px-4 focus:outline-none hover:bg-blue-700 rounded">Detail</button>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Microsoft Surface Pro
                    </th>
                    <td class="py-4 px-6">
                      White
                    </td>
                    <td class="py-4 px-6">
                      Laptop PC
                    </td>
                    <td class="py-4 px-6">
                      <button class="flex ml-auto text-white bg-yellow-600 border-0 py-2 px-4 focus:outline-none hover:bg-yellow-700 rounded">Shipping</button>
                    </td>
                    <td class="py-4 px-6 text-right">
                      <button class="flex ml-auto text-white bg-blue-600 border-0 py-2 px-4 focus:outline-none hover:bg-blue-700 rounded">Detail</button>
                    </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Magic Mouse 2
                    </th>
                    <td class="py-4 px-6">
                      Black
                    </td>
                    <td class="py-4 px-6">
                      Accessories
                    </td>
                    <td class="py-4 px-6">
                      <button class="flex ml-auto text-white bg-red-600 border-0 py-2 px-4 focus:outline-none hover:bg-yellow-700 rounded">Pending</button>
                    </td>
                    <td class="py-4 px-6 text-right">
                      <button class="flex ml-auto text-white bg-blue-600 border-0 py-2 px-4 focus:outline-none hover:bg-blue-700 rounded">Detail</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>

    </>
  )
}
