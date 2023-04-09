import React from 'react'

function AboutPage() {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-5xl mx-auto py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            euismod ultricies dolor vitae dignissim. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Nam suscipit consequat erat, vitae accumsan arcu commodo vel. Nullam
            lobortis nulla eu elit vestibulum, sit amet sollicitudin enim
            dictum. Vestibulum vel quam vel nulla rhoncus tincidunt. Sed vel
            sapien tellus. Donec suscipit eget nulla vitae mattis. Curabitur ut
            commodo nibh, eu porttitor velit. Nullam tincidunt elementum
            ultricies.
          </p>
          <div className="mt-6">
            <h2 className="text-xl font-medium text-gray-900">Our Team</h2>
            <ul className="mt-4">
              <li className="border-t border-gray-200 py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://via.placeholder.com/150"
                      alt="Person 1"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Person 1
                    </h3>
                    <p className="text-gray-500">Job Title 1</p>
                  </div>
                </div>
              </li>
              <li className="border-t border-gray-200 py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://via.placeholder.com/150"
                      alt="Person 2"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Person 2
                    </h3>
                    <p className="text-gray-500">Job Title 2</p>
                  </div>
                </div>
              </li>
              <li className="border-t border-gray-300 py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://via.placeholder.com/150"
                      alt="Person 3"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Person 3
                    </h3>
                    <p className="text-gray-500">Job Title 3</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage