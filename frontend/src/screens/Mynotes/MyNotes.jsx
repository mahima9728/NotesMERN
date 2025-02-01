import React from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import notes from "../../../data/notes";

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      console.log("Deleted note with ID:", id);
      // Implement delete logic here
    }
  };

  return (
    <MainScreen title="Welcome Back User Name">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }}>
          Create new note
        </Button>
      </Link>

      <Accordion>
        {notes.map((note, index) => (
          <Accordion.Item key={note._id} eventKey={index.toString()}>
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex", alignItems: "center" }}>
                <Accordion.Button
                  as="div"
                  style={{ flex: 1, cursor: "pointer" }}
                >
                  {note.title}
                </Accordion.Button>
                <div>
                  <Button as={Link} to={`/notes/${note._id}`}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Body>
                <h4>
                  <Badge bg="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created on --date
                  </footer>
                </blockquote>
              </Accordion.Body>
            </Card>
          </Accordion.Item>
        ))}
      </Accordion>
    </MainScreen>
  );
};

export default MyNotes;
