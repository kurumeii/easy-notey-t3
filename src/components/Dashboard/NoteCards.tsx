import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Ui/card"
import useGetNotes from "@/hooks/useGetNotes"
import { useAppSelector } from "@/hooks/useRedux"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import EditNoteModal from "../Modals/EditNoteModal"
import SkeletonCards from "../Skeletons/SkeletonCards"
import TagPill from "../Tags/TagPill"

const NoteCards = () => {
  const { sorting, searchQuery } = useAppSelector((s) => s.search)
  const {
    isLoading: noteDataLoading,
    fetchNextPage,
    data: notesData,
    isFetchingNextPage,
  } = useGetNotes({
    title: searchQuery,
    tagsId: [],
    sortedBy: sorting,
  })

  const loadMoreRef = useRef(null)
  const inView = useInView(loadMoreRef)

  useEffect(() => {
    inView && void fetchNextPage()
  }, [fetchNextPage, inView])

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-3 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {noteDataLoading ? (
          <SkeletonCards className="h-40" number={10} />
        ) : (
          <>
            {notesData
              ? notesData.pages.map((noteData) =>
                  noteData.notes.map(({ title, createdAt, tags, id }) => (
                    <motion.div
                      key={id}
                      initial="initial"
                      animate="animate"
                      viewport={{ once: true }}
                      variants={{
                        initial: { y: 100, opacity: 0 },
                        animate: {
                          y: 0,
                          opacity: 1,
                        },
                      }}
                    >
                      <Card
                        tabIndex={0}
                        className="flex h-full w-full shadow-sm transition-all hover:shadow-lg focus:shadow-lg dark:hover:border-primary"
                      >
                        <CardHeader className="w-32 flex-1 ">
                          <CardTitle className="overflow-hidden text-ellipsis">
                            {title}
                          </CardTitle>
                          <CardDescription>
                            Created at {createdAt.toLocaleDateString()}
                          </CardDescription>
                          <div className="mt-3 flex flex-wrap gap-2 space-x-4 text-sm text-muted-foreground">
                            {tags.map((tag) => (
                              <TagPill
                                key={tag.label}
                                label={tag.label}
                                color={tag.color}
                              />
                            ))}
                          </div>
                        </CardHeader>
                        <CardContent className="my-3">
                          <EditNoteModal noteId={id} />
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))
                )
              : null}
            {isFetchingNextPage ? (
              <SkeletonCards number={2} className="h-40" />
            ) : null}
          </>
        )}
      </div>
      <div ref={loadMoreRef}></div>
    </>
  )
}

export default NoteCards
