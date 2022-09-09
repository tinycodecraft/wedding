import { NavLinkProps } from "@mantine/core";
import { PageProps } from "gatsby";
import React, { PropsWithChildren } from "react";

export as namespace globalSp;

export interface ExNavLinkProps extends NavLinkProps{
  link: string; 
}

export interface UserProps extends PropsWithChildren{
  email:string;
}

export interface PersonProps{
  name:string;
  description:string;
  link: string;
  alt: string;
}
export interface SectionElProps {
  height?: number | string | undefined;
  mode: string;
  color?: string;

}
export interface ComponentElProps {
  cp: 'p' | 'span' | 'h1'| 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  toBig?: boolean;
  mode?: string;
}

export interface TwoColumnProps<T>{
  props?: T,
  child1: React.ReactNode?,
  child2: React.ReactNode?
}



export interface BannerProps {
  titlevalue: string  
}

export interface StnButtonProps {
    color: 'blue' | 'violet';
    radius: number;
  }
  export interface HeartProps{
    color:  string;
  }

  export interface MainProps{
    height: number | string;
    color: string;
  }

  /**
  type AppProps = {
  message: string;
  count: number;
  disabled: boolean;
  
  names: string[];
  
  status: "waiting" | "success";
  
  obj: object;
  obj2: {}; // almost the same as `object`, exactly the same as `Object`
  
  obj3: {
    id: string;
    title: string;
  };
  
  objArr: {
    id: string;
    title: string;
  }[];
  
  dict1: {
    [key: string]: MyTypeHere;
  };
  dict2: Record<string, MyTypeHere>; // equivalent to dict1
  
  onSomething: Function;
  
  onClick: () => void;
  
  onChange: (id: number) => void;
  
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  
  optional?: OptionalType;

};

 */
/**
  
  export declare interface AppProps {
  children?: React.ReactNode; // best, accepts everything React can render
  childrenElement: JSX.Element; // A single React element
  style?: React.CSSProperties; // to pass through style props
  onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
  //  more info: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring
  props: Props & React.ComponentPropsWithoutRef<"button">; // to impersonate all the props of a button element and explicitly not forwarding its ref
  props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>; // to impersonate all the props of MyButtonForwardedRef and explicitly forwarding its ref
}
 */