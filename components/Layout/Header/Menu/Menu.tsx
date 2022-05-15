import React, {  useEffect, useState } from "react";

let BASE_API_URI = process.env.NEXT_PUBLIC_BASE_API_URI as string;

export default function Menu({
  categoryId,
  menuRef,
}: {
  categoryId: string;
  menuRef: React.RefObject<HTMLDivElement>;
}) {
  const [subCategories, setSubCategories] = useState<Category[]>();

  const fetchSubCategories = async () => {
    const response = await fetch(BASE_API_URI + "/categories/"+categoryId);
    const data: Category[] = await response.json();
    setSubCategories(data);
  };

  useEffect(() => {
    fetchSubCategories()
  }, [categoryId])
  


  let col1: Category[] = [],
    col2: Category[] = [];
  for (
    let index = 0;
    subCategories !== undefined && index < subCategories.length;
    index++
  ) {
    if (index < subCategories.length / 2) {
      col1.push(subCategories[index]);
    } else col2.push(subCategories[index]);
  }
  return (
    <div className="main-menu shadow container" ref={menuRef}>
      <div className="row">
        <div className="col-2">
          <div className="d-flex flex-column gap-2">
            {col1.map((c) => (
              <a key={c.id} className="menu-link" href="#">
                {c.title}
              </a>
            ))}
          </div>
        </div>
        <div className="col-2">
          <div className="d-flex flex-column gap-2">
            {col2.map((c) => (
              <a key={c.id} className="menu-link" href="#">
                {c.title}
              </a>
            ))}
          </div>
        </div>
        <div className="col-4">
          <img
            className="d-block w-100 "
            style={{ aspectRatio: "16/9", objectFit: "cover" }}
            src="https://cdn.dsmcdn.com/ty423/campaign/banners/original/605258/a1d1256a19_0_new.jpg"
            alt="Second slide"
          />
        </div>
        <div className="col-4">
          <img
            className="d-block w-100"
            style={{ aspectRatio: "16/9", objectFit: "cover" }}
            src="https://cdn.dsmcdn.com/ty423/campaign/banners/original/605258/a1d1256a19_0_new.jpg"
            alt="Second slide"
          />
        </div>
      </div>
    </div>
  );
}
