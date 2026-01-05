'use client';

import './assistant.css';

import {
    EYES_OPEN_MAP,
    EYES_CLOSED_MAP,
    MOUTH_MAP,
} from './faceMaps';

type Props = {
    blink: boolean;
};

export function LedFace({ blink }: Props) {
    return (
        <div className="led-display">
            {Array.from({ length: 400 }).map((_, i) => {
                const eyeOn = blink
                    ? EYES_CLOSED_MAP.has(i)
                    : EYES_OPEN_MAP.has(i);

                return (
                    <span
                        key={i}
                        className={`led-pixel ${eyeOn || MOUTH_MAP.has(i) ? 'on' : ''}`}
                    />
                );
            })}
        </div>
    );
}
