'use client'

import { useModalStore } from "@/app/store/modalStore";
import "./Modal.scss"
import { useCallback } from "react";

const Modal = () => {
    const setIsOpen = useModalStore((state) => state.setIsOpen)
    const action = useModalStore((state) => state.action)
    const isOpen = useModalStore((state) => state.isOpen)
    const content = useModalStore((state) => state.content)

    const handleConfirm = useCallback(() => {
        action()
        setIsOpen()
    }, [action])

    return isOpen ? (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-description">
                    {content}
                </div>
                <div className="modal-actions">
                    <button className="modal-action modal-action-success" onClick={handleConfirm}>Confirm</button>
                    <button className="modal-action modal-action-danger" onClick={setIsOpen}>Cancel</button>
                </div>
            </div> 
        </div>
    ): null;
};

export default Modal;