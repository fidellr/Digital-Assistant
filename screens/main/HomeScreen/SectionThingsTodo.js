import React, { useState, useEffect, memo } from "react";
import ThingsTodoSwipeable from "../../../components/ThingsTodoSwipeable";

const mockData = [
  {
    id: 1,
    avatar_url:
      "https://pngimage.net/wp-content/uploads/2018/06/girl-avatar-png-3.png",
    dealsImage:
      "https://media-exp1.licdn.com/dms/image/C560BAQHEreYpKCX6jQ/company-logo_200_200/0?e=2159024400&v=beta&t=js-rXTeV50XTxWosiHxs2sOVlTAm0AzzTM9UxFPxzPE",
    text: "Allison from Courts hasn't responded in 3 Days. Follow up?"
  },
  {
    id: 2,
    avatar_url:
      "https://i.pinimg.com/originals/cb/14/a4/cb14a4b97cc5ca03bbfa5a8b8e1bc5c0.jpg",
    dealsImage: null,
    text: "Have you sent the signed NDA to Singapore Airlines?"
  },
  {
    id: 3,
    avatar_url:
      "https://icons-for-free.com/iconfiles/png/512/boy+guy+man+icon-1320166733913205010.png",
    dealsImage:
      "https://i.pinimg.com/originals/cb/14/a4/cb14a4b97cc5ca03bbfa5a8b8e1bc5c0.jpg",
    text: "Prepare for your meeting tomorrow with Carl from Singapore Airlines?"
  },
  {
    id: 4,
    avatar_url:
      "https://cdn.iconscout.com/icon/free/png-512/nestle-1-226275.png",
    dealsImage: null,
    text: "Finish debrief for yesterday's meeting with Sam from Nestle"
  }
];

const SectionThingsTodo = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      setData(mockData);
    }
  }, [data]);

  const onDeleteTodo = item => {
    setData(state => {
      const newData = state.filter(data => item.id !== data.id);
      return newData;
    });
  };

  return (
    <ThingsTodoSwipeable
      data={data}
      onDismiss={onDeleteTodo}
      onArchive={onDeleteTodo}
    />
  );
};

export default SectionThingsTodo;
