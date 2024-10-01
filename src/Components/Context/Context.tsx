import React from "react";
import { createContext, useState } from "react";
export const themeContext = createContext<string|null>(null);
export const counterContext = createContext<number>(0);

