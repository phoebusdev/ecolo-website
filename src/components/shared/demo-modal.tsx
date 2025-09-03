"use client";

import { useState } from "react";
import Modal from "./modal";
import Tooltip from "./tooltip";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { ExpandingArrow, LoadingDots } from "./icons";

export default function DemoModal() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Precedent Components Demo
      </h2>
      
      {/* Button Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Enhanced Button Component</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="primary" loading>Loading...</Button>
        </div>
      </div>

      {/* Tooltip Demo */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Tooltip Component</h3>
        <div className="flex gap-4">
          <Tooltip content="This is a helpful tooltip">
            <span className="text-blue-600 cursor-help underline">
              Hover for tooltip
            </span>
          </Tooltip>
        </div>
      </div>

      {/* Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Enhanced Icons</h3>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span>Expanding Arrow:</span>
            <div className="group cursor-pointer">
              <ExpandingArrow />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>Loading Dots:</span>
            <LoadingDots />
          </div>
        </div>
      </div>

      {/* Modal Demo */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Modal Component</h3>
        <Button onClick={() => setShowModal(true)}>
          Open Modal
        </Button>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Demo Modal</h3>
            <p className="text-gray-600 mb-4">
              This modal component adapts to mobile with a drawer interface
              and uses Radix UI for desktop.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setShowModal(false)}
            >
              Close Modal
            </Button>
          </div>
        </Modal>
      </div>

      {/* Card Demo */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Enhanced Card Component</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Sample Card"
            description="This card component now supports **markdown** formatting and has improved styling with Ecolo brand colors."
            demo={
              <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
                <span className="text-2xl">🌱</span>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}