import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ListCard = ({ title, username, delay }) => {
  return (
    <div className="col-lg-4 col-sm-6 p-4">
      <Link to={`/list/${title}`}>
        <motion.div
          className="list-card shadow-lg bg-light py-4 hover"
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
            transition: {
              ease: [1, 1, 1, 1],
              delay: delay,
              duration: 0.3,
            },
          }}
          whileHover={{
            scale: 1.1,
          }}
        >
          <h5 className="m-0 text-dark font-weight-bold">{title}</h5>
          <h6 className="m-0 text-dark font-weight-bold mt-2 email">
            By: {username}
          </h6>
        </motion.div>
      </Link>
    </div>
  );
};

export default ListCard;
