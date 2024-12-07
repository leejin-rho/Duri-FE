import { TimeProps } from "@duri-fe/utils";

export interface RequestProps extends TimeProps {
    petId?: number;
    menu: string[];
    addMenu: string[];
    specialMenu: string[];
    design: string[];
    etc: string;
    day: Date;
    shopIds: number[];
  }