import React, { useState, useEffect } from "react";
import Main from "../../pages/MainPage";

function ModalLoginSuccess() {
  return (
    <div>
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen px-4">
          <div class="bg-white rounded-lg shadow-xl p-4 mx-auto">
            <div class="text-center">
              <svg
                class="h-16 w-16 text-green-500 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <h3 class="text-lg font-medium leading-6 text-gray-900 mb-4">
                Login Successful
              </h3>
              <p class="text-sm text-gray-500">
                You have successfully logged in.
              </p>
            </div>
            <div class="mt-4">
              <button class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalLoginSuccess;
