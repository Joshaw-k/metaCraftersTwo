import { Container } from "../components/Container";
import company from "../asset/company.jpg";
import Image from "next/image";

import React from "react";
import Link from "next/link";

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32 -mt-16">
      <div className="md:flex gap-x-8 justify-between md:bg-gray-800 items-center">
        <div className="md:w-[50%]">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight md:bg-gray-800 md:text-white sm:text-7xl">
            The Number One{" "}
            <span className="relative whitespace-nowrap text-[#1D4ED8]">
              <span className="relative">Vesting</span>
            </span>{" "}
            Platform for your Company.
          </h1>

          <div className="mt-10 flex justify-center space-x-6 ">
            <Link
              href="/create"
              className="bg-[#1D4ED8] text-white px-4 py-2 rounded-lg"
            >
              Create Company
            </Link>
          </div>
        </div>

        <Image
          src={company}
          width={300}
          height={30}
          alt="ff"
          className="hidden md:block md:w-[50%]"
        />
      </div>
    </Container>
  );
}
