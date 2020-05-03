import React, { useState, useEffect } from "react";
import {
    Title,
    Form,
    FormGroup,
    FormItem,
    Input,
    Button,
    InputType,
    ButtonDesign,
    ValueState,
} from "@ui5/webcomponents-react";
import { ProfileProps } from "../../interfaces/Profile";

export const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
    useEffect(() => {
        let name: any = window.localStorage.getItem("name");
        let age: any = window.localStorage.getItem("age");

        setNameInputValue(name);
        setAgeInputValue(age);
    }, [])

    const getNameFromLocalStorage = (): string | undefined => {
        const name = window.localStorage.getItem("name");
        return name ? name : undefined;
    };
    const [, setName] = useState(getNameFromLocalStorage());
    const [nameState, setNameState] = useState(ValueState.None);
    const [ageState, setAgeState] = useState(ValueState.None);
    const [nameInputValue, setNameInputValue] = useState();
    const [ageInputValue, setAgeInputValue] = useState();

    const onNameChange = (event: any) => {
        const name = event.target.getInputValue();
        setNameInputValue(name);
        setNameState(nameInputValue ? ValueState.Success : ValueState.Error);
    };

    const onAgeChange = (event: any) => {
        const age = event.target.getInputValue();
        setAgeInputValue(age);
        setAgeState(ageInputValue ? ValueState.Success : ValueState.Error);
    };

    const validateInputs = (): boolean => {
        setNameState(nameInputValue ? ValueState.Success : ValueState.Error);
        setAgeState(ageInputValue ? ValueState.Success : ValueState.Error);

        return !!ageInputValue && !!nameInputValue;
    };

    const onConfirmPress = (event: any) => {
        if (!validateInputs()) {
            return;
        }

        window.localStorage.setItem("name", nameInputValue || "");
        window.localStorage.setItem("age", ageInputValue || "");
        setName(nameInputValue);
        
        props.onProfileChange?.call(null);
    };

    return (
        <div>
            {!props.hideTitle && <Title style={{ padding: "15px" }}>Dados Pessoais</Title>}
            <Form title={""}>
                <FormGroup title={""}>
                    <FormItem label={"Nome"}>
                        <Input
                            type={InputType.Text}
                            onInput={onNameChange}
                            placeholder={"Digite seu nome..."}
                            required
                            value={nameInputValue}
                            valueState={nameState}
                        />
                    </FormItem>
                    <FormItem label={"Idade"}>
                        <Input
                            type={InputType.Number}
                            onInput={onAgeChange}
                            placeholder={"Digite sua idade..."}
                            required
                            value={ageInputValue}
                            valueState={ageState}
                        />
                    </FormItem>
                    <Button
                        style={{ marginTop: "0.5rem" }}
                        design={ButtonDesign.Emphasized}
                        onClick={onConfirmPress}
                    >
                        Confirm
                    </Button>
                </FormGroup>
            </Form>
        </div>
    );
};
