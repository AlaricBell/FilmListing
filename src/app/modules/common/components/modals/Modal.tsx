'use client'

import "./Navigation.scss"
import Link from 'next/link';
import classNames from "classnames";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

const Modal = () => {
    return (
        <div className="modal-container">
            <div className="modal-description">
                
            </div>
            <div className="modal-actions">
                <button className="modal-action"></button>
                <button className="modal-action"></button>
            </div>
        </div>
    );
};

export default Modal;