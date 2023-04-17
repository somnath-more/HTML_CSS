import React from 'react';

export interface ErrorMessageProps {
  message: string;
  style?: React.CSSProperties;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, style }) => {
  return <div style={{ color: 'red', ...style }}>{message}</div>;
};
