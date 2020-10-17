import React from "react";
import classNames from "classnames"; // library used for joining the array in className. Eample-> className = {['cssA,cssB'].join('')} and this leads className = 'cssA cssB'. This can be simplified with 'classnames' module
import { Container, Title, Text, Image, Body, Button } from "./styles/Card";

export function Card({ classes, children, ...restProps }) {
  return (
    <Container className={classNames("card", classes)} {...restProps}>
      {children}
    </Container>
  );
}
// Note: We aren't using className "card" / "card__body"/ "card__title" and so on. We might define it later if needed

Card.Body = function CardBody({ classes, children, ...restProps }) {
  return (
    <Body className={classNames("card__body", classes)} {...restProps}>
      {children}
    </Body>
  );
};

Card.Title = function CardTitle({ classes, children, ...restProps }) {
  return (
    <Title className={classNames("card__title", classes)} {...restProps}>
      {children}
    </Title>
  );
};

Card.Text = function CardText({ classes, children, ...restProps }) {
  return (
    <Text className={classNames("card__text", classes)} {...restProps}>
      {children}
    </Text>
  );
};

Card.Button = function CardButton({ classes, children, ...restProps }) {
  return (
    <Button
      type="button"
      className={classNames("card__button", classes)}
      {...restProps}
    >
      {children}
    </Button>
  );
};

Card.Image = function CardImage({ classes, src, alt, ...restProps }) {
  return (
    <Image
      src={src}
      alt={alt}
      className={classNames("card__image", classes)}
      {...restProps}
    />
  );
};
